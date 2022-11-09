export interface FundTransfer {
    transferId?: number,
    sourceAccount: string,
    destinationAccount: string,
    destinationAccountTypeId: number,
    transferAmount: number
}