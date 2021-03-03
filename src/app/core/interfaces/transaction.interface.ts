export interface Transaction {
    asset: string;
    amountCrypto: number;
    amountCash: number;
    dateOfTransfer: string;
    currentValue: number;
    profitLoss: number;
    timeSeries: any[];
}
