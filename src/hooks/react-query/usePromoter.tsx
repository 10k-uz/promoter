import { useMutation, useQuery } from "react-query";
import {
  promoterService,
  loginType,
  registerType,
  updateInfoType,
} from "../../services";

const usePromoter = (usageType: string) => {
  const promoterRegister = useMutation({
    mutationKey: ["promoterRegister"],
    mutationFn: (data: registerType) => {
      return promoterService.register(data);
    },
  });

  const promoterLogin = useMutation({
    mutationKey: ["promoterLogin"],
    mutationFn: (data: loginType) => {
      return promoterService.login(data);
    },
  });

  const verifyEmail = useMutation({
    mutationKey: ["verifyEmail"],
    mutationFn: (code: number) => {
      return promoterService.verifyEmail(code);
    },
  });

  const resendCode = useMutation({
    mutationKey: ["resendCode"],
    mutationFn: () => {
      return promoterService.resendCode();
    },
  });

  const getPromoter = useQuery({
    queryKey: ["getPromoter"],
    queryFn: () => {
      return promoterService.getPromoter();
    },
    enabled: usageType === "GET_PROMOTER",
  });

  const updatePromoterInfo = useMutation({
    mutationKey: ["updatePromoterInfo"],
    mutationFn: (data: updateInfoType) => {
      return promoterService.updateInfo(data);
    },
  });

  return {
    getPromoter,
    promoterRegister,
    promoterLogin,
    updatePromoterInfo,
    verifyEmail,
    resendCode,
  };
};

export default usePromoter;
