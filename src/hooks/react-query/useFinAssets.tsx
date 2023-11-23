import { useQuery } from "react-query";
import { finAssetsService } from "../../services";

export const useGetFinAssets = () => {
  return useQuery({
    queryKey: ["GET_ASSETS"],
    queryFn: () => {
      return finAssetsService.getAssets();
    },
  });
};

export const useGetDepositStatus = () => {
  return useQuery({
    queryKey: ["GET_DEPOSIT_STATUS"],
    queryFn: () => {
      return finAssetsService.getDepositStatus();
    },
  });
};
