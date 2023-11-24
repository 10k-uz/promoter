import { queryParamsType } from "../interfaces";
import { makeTransactionType } from "../interfaces/transactions";
import api from "./api";

class Transactions {
  makeTrRequest = async (data: makeTransactionType) => {
    return await api.post("/v1/transactions/withdraw-request", data);
  };

  getTransactions = async (queryParams: queryParamsType) => {
    let { page, limit } = queryParams;
    return await api.get(`/v1/transactions/?page=${page}&limit=${limit}`);
  };
}

export const transactionsService = new Transactions();
