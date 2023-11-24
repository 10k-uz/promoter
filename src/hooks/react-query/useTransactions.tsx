import { useMutation, useQuery } from "react-query";
import { transactionsService } from "../../services";
import { queryParamsType } from "../../interfaces";
import { makeTransactionType } from "../../interfaces/transactions";

const useTransactions = (queryParams: queryParamsType, usageType: string) => {
  const makeTrRequest = useMutation({
    mutationKey: ["makeTransaction"],
    mutationFn: (data: makeTransactionType) => {
      return transactionsService.makeTrRequest(data);
    },
  });

  const getTransactions = useQuery({
    queryKey: ["getTransactions", queryParams],
    queryFn: () => {
      return transactionsService.getTransactions(queryParams);
    },
    enabled: usageType === "GET_TRANSACTIONS",
  });

  return { getTransactions, makeTrRequest };
};

export default useTransactions;
