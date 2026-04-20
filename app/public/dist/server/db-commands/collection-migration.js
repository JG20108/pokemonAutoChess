"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const mongoose_1 = require("mongoose");
const collection_1 = require("../app/core/collection");
const user_metadata_1 = __importDefault(require("../app/models/mongo-models/user-metadata"));
class Collection {
    static migrateUserCollection(userDoc) {
        let hasChanges = false;
        if (!userDoc.pokemonCollection)
            return false;
        for (const [index, pokemonDoc] of userDoc.pokemonCollection.entries()) {
            if (pokemonDoc.unlocked && pokemonDoc.unlocked.length === 3) {
                continue;
            }
            const emotions = pokemonDoc.get('emotions') || [];
            const shinyEmotions = pokemonDoc.get('shinyEmotions') || [];
            const mask = collection_1.CollectionUtils.getEmotionMask(emotions, shinyEmotions);
            pokemonDoc.unlocked = Buffer.copyBytesFrom(mask, 0, 5);
            hasChanges = true;
        }
        return hasChanges;
    }
    static migrateAllUsers() {
        return __awaiter(this, arguments, void 0, function* (batchSize = 100, dryRun = true, sampleSize) {
            console.log(`Starting emotion migration (dryRun: ${dryRun})`);
            let processed = 0;
            let migrated = 0;
            let skip = 0;
            const totalUsers = yield user_metadata_1.default.countDocuments();
            const maxUsers = sampleSize || totalUsers;
            if (sampleSize) {
                console.log(`Sample size set to: ${sampleSize} ; Total users to process: ${totalUsers}`);
                batchSize = Math.min(batchSize, sampleSize);
            }
            else {
                console.log(`Total users to process: ${totalUsers}`);
            }
            while (skip < maxUsers) {
                const users = yield user_metadata_1.default.find({}).skip(skip).limit(batchSize).exec();
                for (const user of users) {
                    processed++;
                    const hasChanges = this.migrateUserCollection(user);
                    if (hasChanges) {
                        migrated++;
                        if (!dryRun) {
                            yield user.save();
                            console.log(`✅ Migrated user ${user.uid} (${user.displayName})`);
                        }
                        else {
                            console.log(`🔍 Would migrate user ${user.uid} (${user.displayName})`);
                        }
                    }
                    if (processed % 100 === 0) {
                        console.log(`Progress: ${processed}/${totalUsers} users processed, ${migrated} migrated`);
                    }
                }
                skip += batchSize;
            }
            console.log(`Migration complete: ${processed} users processed, ${migrated} users migrated`);
        });
    }
    static cleanupLegacyFields() {
        return __awaiter(this, arguments, void 0, function* (dryRun = true) {
            console.log(`Starting legacy field cleanup (dryRun: ${dryRun})`);
            let processed = 0;
            let updated = 0;
            const batchSize = 100;
            const totalUsers = yield user_metadata_1.default.countDocuments();
            for (let skip = 0; skip < totalUsers; skip += batchSize) {
                const users = yield user_metadata_1.default.find({}).skip(skip).limit(batchSize).exec();
                for (const user of users) {
                    processed++;
                    let hasLegacyFields = false;
                    const unsetOperations = {};
                    for (const [pokemonId, pokemon] of user.pokemonCollection) {
                        const pokemonDoc = pokemon;
                        if (pokemonDoc.get("emotions") || pokemonDoc.get("shinyEmotions")) {
                            hasLegacyFields = true;
                            unsetOperations[`pokemonCollection.${pokemonId}.emotions`] = "";
                            unsetOperations[`pokemonCollection.${pokemonId}.shinyEmotions`] = "";
                        }
                    }
                    if (hasLegacyFields) {
                        if (!dryRun) {
                            yield user_metadata_1.default.updateOne({ _id: user._id }, { $unset: unsetOperations });
                        }
                        else {
                            console.log(`🔍 Would clean legacy fields from user ${user.uid} (${user.displayName})`);
                        }
                        updated++;
                        console.log(`✅ Cleaned legacy fields from user ${user.uid}`);
                    }
                    if (processed % 100 === 0) {
                        console.log(`Progress: ${processed}/${totalUsers} users processed, ${updated} updated`);
                    }
                }
            }
            console.log(`Cleaned up legacy fields from ${updated} users`);
        });
    }
    static verifyMigration(userDoc) {
        const errors = [];
        if (!userDoc.pokemonCollection) {
            return { success: true, errors: [] };
        }
        for (const [index, pokemon] of userDoc.pokemonCollection.entries()) {
            if (!pokemon.unlocked) {
                errors.push(`Pokemon ${index}: Missing unlocked`);
                continue;
            }
            const legacy = {
                emotions: pokemon.emotions || [],
                shinyEmotions: pokemon.shinyEmotions || []
            };
            const { emotions, shinyEmotions } = collection_1.CollectionUtils.getEmotionsUnlocked(pokemon.unlocked);
            const legacyEmotions = legacy.emotions;
            const optimizedEmotions = emotions;
            const legacyEmotionsSet = new Set(legacyEmotions);
            const optimizedEmotionsSet = new Set(optimizedEmotions);
            if (legacyEmotionsSet.size !== optimizedEmotionsSet.size ||
                !legacyEmotions.every((e) => optimizedEmotionsSet.has(e))) {
                errors.push(`Pokemon ${index}: Emotions mismatch`);
            }
            const legacyShinyEmotions = legacy.shinyEmotions;
            const optimizedShinyEmotions = shinyEmotions;
            const legacyShinySet = new Set(legacyShinyEmotions);
            const optimizedShinySet = new Set(optimizedShinyEmotions);
            if (legacyShinySet.size !== optimizedShinySet.size ||
                !legacyShinyEmotions.every((e) => optimizedShinySet.has(e))) {
                errors.push(`Pokemon ${index}: Shiny emotions mismatch`);
            }
        }
        return { success: errors.length === 0, errors };
    }
    static calculateUserSpaceSavings(userDoc) {
        let pokemonCount = 0;
        let totalOldSize = 0;
        let totalNewSize = 0;
        function calculateSpaceSavings(avgEmotionsPerPokemon = 5) {
            const oldNormalSize = avgEmotionsPerPokemon * 8 + 24;
            const oldShinySize = avgEmotionsPerPokemon * 8 + 24;
            const oldSelectedSize = 8 + 1;
            const oldSize = oldNormalSize + oldShinySize + oldSelectedSize;
            const newSize = 5;
            const savings = oldSize - newSize;
            const savingsPercent = (savings / oldSize) * 100;
            return { oldSize, newSize, savings, savingsPercent };
        }
        if (!userDoc.pokemonCollection) {
            return {
                pokemonCount: 0,
                oldSize: 0,
                newSize: 0,
                savings: 0,
                savingsPercent: 0
            };
        }
        for (const [_, pokemon] of userDoc.pokemonCollection.entries()) {
            pokemonCount++;
            const emotionCount = (pokemon.emotions || []).length;
            const shinyEmotionCount = (pokemon.shinyEmotions || []).length;
            const avgEmotions = (emotionCount + shinyEmotionCount) / 2;
            const savings = calculateSpaceSavings(avgEmotions);
            totalOldSize += savings.oldSize;
            totalNewSize += savings.newSize;
        }
        const totalSavings = totalOldSize - totalNewSize;
        const savingsPercent = totalOldSize > 0 ? (totalSavings / totalOldSize) * 100 : 0;
        return {
            pokemonCount,
            oldSize: totalOldSize,
            newSize: totalNewSize,
            savings: totalSavings,
            savingsPercent
        };
    }
    static generateMigrationReport() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Generating migration report...");
            const sampleSize = 100;
            const users = yield user_metadata_1.default.find().limit(sampleSize).exec();
            let totalUsers = 0;
            let totalPokemon = 0;
            let totalOldSize = 0;
            let totalNewSize = 0;
            let usersNeedingMigration = 0;
            for (const user of users) {
                totalUsers++;
                const needsMigration = this.userNeedsMigration(user);
                if (needsMigration) {
                    usersNeedingMigration++;
                }
                const savings = this.calculateUserSpaceSavings(user);
                totalPokemon += savings.pokemonCount;
                totalOldSize += savings.oldSize;
                totalNewSize += savings.newSize;
            }
            const totalSavings = totalOldSize - totalNewSize;
            const savingsPercent = totalOldSize > 0 ? (totalSavings / totalOldSize) * 100 : 0;
            console.log("\n=== EMOTION OPTIMIZATION MIGRATION REPORT ===");
            console.log(`Sample size: ${totalUsers} users`);
            console.log(`Total Pokemon entries: ${totalPokemon}`);
            console.log(`Users needing migration: ${usersNeedingMigration} (${((usersNeedingMigration / totalUsers) * 100).toFixed(1)}%)`);
            console.log(`\nSpace Analysis:`);
            console.log(`- Current size: ${totalOldSize} bytes`);
            console.log(`- Optimized size: ${totalNewSize} bytes`);
            console.log(`- Savings: ${totalSavings} bytes (${savingsPercent.toFixed(1)}%)`);
            console.log(`- Average savings per user: ${(totalSavings / totalUsers).toFixed(1)} bytes`);
            console.log(`\nFor full database, estimated savings: ${((totalSavings / sampleSize) * (yield user_metadata_1.default.countDocuments())).toFixed(0)} bytes`);
            console.log("============================================\n");
        });
    }
    static userNeedsMigration(userDoc) {
        if (!userDoc.pokemonCollection)
            return false;
        for (const [_, pokemon] of userDoc.pokemonCollection.entries()) {
            if (!pokemon.unlocked || pokemon.unlocked.length !== 3) {
                return true;
            }
        }
        return false;
    }
}
exports.Collection = Collection;
if (require.main === module) {
    const command = process.argv[2];
    const dryRun = process.argv.includes("--dry-run");
    const limitArg = process.argv.find(arg => arg.startsWith("--limit="));
    const sampleSize = limitArg ? parseInt(limitArg.split("=")[1], 10) : undefined;
    (0, mongoose_1.connect)(process.env.MONGO_URI);
    switch (command) {
        case "report":
            Collection.generateMigrationReport().then(() => process.exit(0));
            break;
        case "migrate":
            Collection.migrateAllUsers(100, dryRun, sampleSize).then(() => process.exit(0));
            break;
        case "cleanup":
            Collection.cleanupLegacyFields(dryRun).then(() => process.exit(0));
            break;
        default:
            console.log("Usage:");
            console.log("  npm run collection-migration report    - Generate migration report");
            console.log("  npm run collection-migration migrate [--dry-run] - Migrate users", "  npm run collection-migration migrate --limit=100 [--dry-run] - Migrate 100 users");
            console.log("  npm run collection-migration cleanup [--dry-run] - Remove legacy fields");
    }
}
//# sourceMappingURL=collection-migration.js.map