export interface IGameActivityDay {
    date: string;
    gameCount: number;
}
export interface IGameActivity {
    updatedAt: string;
    days: IGameActivityDay[];
}
