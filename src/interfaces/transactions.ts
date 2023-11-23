export interface transactionsType {
  id?: number;
  promoterId?: number;
  amount?: number;
  card_number?: string;
  card_name?: string;
  status?: transactionStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum transactionStatus {
  NEW = "NEW",
  PAID = "PAID",
  REJECTED = "REJECTED",
}

export interface makeTransactionType {
  card_number: string;
  card_name: string;
  amount: number;
}
