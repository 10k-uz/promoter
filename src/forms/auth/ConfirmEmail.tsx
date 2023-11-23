import { useState } from "react";
import { Button, Input, Timer } from "../../components/ui";
import { useCountDown, usePromoter } from "../../hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastType, customToast } from "../../utils";
import { MAIL_CODE_RESEND_TIME } from "../../configs";

const ConfirmEmailForm = () => {
  const navigate = useNavigate();

  const { verifyEmail, resendCode } = usePromoter("FAIL");

  const [isExpired, setExpired] = useState(false);
  const { secondsLeft, start } = useCountDown(
    MAIL_CODE_RESEND_TIME,
    setExpired
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ code: number }>();

  const onVerifySubmit: SubmitHandler<{ code: number }> = (data) => {
    verifyEmail.mutate(+data.code, {
      onSuccess(response) {
        // set access and refresh token
        localStorage.setItem("accessToken", response.data?.accessToken);
        localStorage.setItem("refreshToken", response.data?.refreshToken);

        // toast notification
        customToast(ToastType.SUCCESS, "Muvaffaqiyatli ro'yxatdan o'tdingiz");

        // navigate to main page
        navigate("/");
      },
      onError(error: any) {
        customToast(
          ToastType.ERROR,
          error.response?.data?.message || "Something went wrong"
        );
      },
    });
  };

  const handleBeforeUnload = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("authStep");
  };

  window.addEventListener("beforeunload", handleBeforeUnload);

  const onResendCode = () => {
    resendCode.mutate(undefined, {
      onSuccess() {
        start(MAIL_CODE_RESEND_TIME);
        setExpired(false);
        customToast(ToastType.SUCCESS, "Tasdiqlash kodi qayta yuborildi!");
      },
      onError() {
        customToast(ToastType.ERROR, "Qayta yuborishda xatolik yuz berdi");
      },
    });
  };

  return (
    <>
      <h1 className="font-semibold text-[20px]">Emailni tasdiqlash</h1>
      <form
        className="flex flex-col gap-3 w-[40%] max-md:w-full"
        onSubmit={(e: any) => e.preventDefault()}
      >
        <div className="flex gap-3">
          <Input
            placeholder="Kodni kiriting"
            type="number"
            register={register("code", {
              required: "Kod kiritilishi shart!",
              minLength: {
                value: 4,
                message: "Kod 4 ta belgidan iborat bo'lishi shart",
              },
              maxLength: {
                value: 4,
                message: "Kod 4 ta belgidan iborat bo'lishi shart",
              },
            })}
          />
          <div className={`${isExpired && "hidden"}`}>
            <Timer secondsLeft={secondsLeft} />
          </div>
        </div>

        <span className="text-red-600 text-[15px]">{errors.code?.message}</span>

        {isExpired ? (
          <Button onClick={onResendCode} isLoading={resendCode.isLoading}>
            Qayta yuborish
          </Button>
        ) : (
          <Button onClick={handleSubmit(onVerifySubmit)}>Tasdiqlash</Button>
        )}
      </form>
    </>
  );
};

export default ConfirmEmailForm;
