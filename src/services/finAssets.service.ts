import api from "./api";

class FinAssets {
  getAssets = async () => {
    return await api.get("/v1/fin-assets");
  };
  getDepositStatus = async () => {
    return await api.get("/v1/fin-assets/deposit-status");
  };
}

export const finAssetsService = new FinAssets();
