import api from "./api";

export interface registerType {
  first_name: string;
  last_name?: string;
  email: string;
  password?: string;
}

export interface updateInfoType {
  first_name?: string;
  last_name?: string;
}

export interface loginType {
  email: string;
  password: string;
}

class Promoter {
  register = async (data: registerType) => {
    return await api.post("/v1/promoter/auth/register", data);
  };
  login = async (data: loginType) => {
    return await api.post("/v1/promoter/auth/login", data);
  };
  verifyEmail = async (code: number) => {
    return await api.post("/v1/promoter/auth/verify", { code });
  };
  resendCode = async () => {
    return await api.post("/v1/promoter/auth/resend");
  };
  getPromoter = async () => {
    return await api.get("/v1/promoter/getme");
  };
  updateInfo = async (data: updateInfoType) => {
    return await api.patch("/v1/promoter/update-info", data);
  };
}

export const promoterService = new Promoter();
