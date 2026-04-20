/**
 * Backfill `gameMode` on legacy DetailledStatistic records.
 *
 * Context: the `gameMode` field was added to DetailledStatistic at some point
 * during the upstream evolution, but the Mongoose schema has no default and
 * `required: false`. Every match stored before that migration ended up in
 * Mongo without the field, and the profile page crashes when it tries to
 * render a GameModeIcon for such a record (`undefined.toLowerCase()`).
 *
 * Fix strategy: single atomic `updateMany` with a `$set`. We use the atomic
 * update instead of `findOne`/`save` pairs because:
 *   1. It bypasses Mongoose document validation (same trick used by the
 *      titles/items migrations earlier in the 6.x series).
 *   2. It never loads documents into memory, so it scales to arbitrarily
 *      large game-history collections.
 *   3. It is idempotent — re-running does nothing because `$exists: false`
 *      filters out already-migrated rows.
 *
 * Assumed value: CUSTOM_LOBBY. The true pre-migration game mode is not
 * recoverable from any field we store; CUSTOM_LOBBY is the safest guess
 * because it is also the in-memory default of the GameRecord Colyseus class
 * and matches the behaviour of records played in custom lobbies (the
 * dominant mode before the split).
 */

import dotenv from "dotenv"
import { connect } from "mongoose"
import DetailledStatistic from "../../app/models/mongo-models/detailled-statistic-v2"
import { GameMode } from "../../app/types/enum/Game"
import { logger } from "../../app/utils/logger"

async function main() {
  dotenv.config()

  if (!process.env.MONGO_URI) {
    logger.error("MONGO_URI not set; aborting.")
    process.exit(1)
  }

  try {
    logger.info("Backfill gameMode: connecting to MongoDB...")
    const db = await connect(process.env.MONGO_URI)

    const missingBefore = await DetailledStatistic.countDocuments({
      gameMode: { $exists: false }
    })
    logger.info(
      `Backfill gameMode: ${missingBefore} records missing the gameMode field.`
    )

    if (missingBefore === 0) {
      logger.info("Backfill gameMode: nothing to do.")
      await db.disconnect()
      return
    }

    const result = await DetailledStatistic.updateMany(
      { gameMode: { $exists: false } },
      { $set: { gameMode: GameMode.CUSTOM_LOBBY } }
    )

    logger.info(
      `Backfill gameMode: matched=${result.matchedCount} modified=${result.modifiedCount}`
    )

    const missingAfter = await DetailledStatistic.countDocuments({
      gameMode: { $exists: false }
    })
    logger.info(
      `Backfill gameMode: ${missingAfter} records still missing the field after migration.`
    )

    await db.disconnect()
    logger.info("Backfill gameMode: done.")
  } catch (err) {
    logger.error("Backfill gameMode failed:", err)
    process.exitCode = 1
  }
}

main()
