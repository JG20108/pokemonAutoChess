export declare class Collection {
    static migrateUserCollection(userDoc: any): boolean;
    static migrateAllUsers(batchSize?: number, dryRun?: boolean, sampleSize?: number): Promise<void>;
    static cleanupLegacyFields(dryRun?: boolean): Promise<void>;
    static verifyMigration(userDoc: any): {
        success: boolean;
        errors: string[];
    };
    static calculateUserSpaceSavings(userDoc: any): {
        pokemonCount: number;
        oldSize: number;
        newSize: number;
        savings: number;
        savingsPercent: number;
    };
    static generateMigrationReport(): Promise<void>;
    private static userNeedsMigration;
}
