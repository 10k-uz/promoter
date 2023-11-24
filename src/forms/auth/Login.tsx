import { Input } from "../../components/ui";
import { Button } from "../../components/ui";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePromoter } from "../../hooks";
import { Link, useNavigate } from "react-router-dom";
import { ToastType, customToast } from "../../utils";

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>();
  const navigate = useNavigate();

  const { promoterLogin } = usePromoter("FAIL");

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    promoterLogin.mutate(data, {
      onSuccess(data) {
        // set access and refresh tokens to cookie
        localStorage.setItem("accessToken", data?.data?.accessToken);
        localStorage.setItem("refreshToken", data?.data?.refreshToken);

        // navigate to main page
        navigate("/");

        // toast success
        customToast(ToastType.SUCCESS, "Welcome back!");
      },
      onError(error: any) {
        customToast(
          ToastType.ERROR,
          error.response.data.message || "Something went wrong"
        );
      },
    });
  };

  return (
    <>
      <h1 className="font-semibold text-[20px]">Tizimga kirish</h1>
      <form
        className="flex flex-col gap-[6px] w-[40%] max-md:w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="Email"
          type="email"
          register={register("email", {
            required: "Email to'ldirilishi shart",
            maxLength: {
              value: 50,
              message: "Email maximal 50 ta symbol bolishi kerak!",
            },
            minLength: {
              value: 4,
              message: "Email minimal 5 ta symbol bo'lishi kerak",
            },
          })}
          error={errors.email?.message}
        />

        <span className={`text-red-600 text-[15px]`}>
          {errors.email?.message}
        </span>

        <Input
          placeholder="Password"
          type="password"
          register={register("password", {
            required: "Parol to'ldirilishi shart",
            maxLength: {
              value: 20,
              message: "Parol maximal 20 ta symbol bolishi kerak!",
            },
            minLength: {
              value: 8,
              message: "Parol minimal 8 ta symbol bo'lishi kerak",
            },
          })}
          error={errors.password?.message}
        />
        <h1 className="text-red-600 text-[15px]">{errors.password?.message}</h1>
        <Button isLoading={promoterLogin.isLoading}>Kirish</Button>
      </form>

      <h1 className="text-[14px]">
        Saytda yangimisiz?
        <Link
          to={"/auth/register"}
          className={`text-[#9D1F4F] font-medium cursor-pointer`}
        >
          {" "}
          Ro'yxatdan o'tish
        </Link>
      </h1>
    </>
  );
};

export default LoginForm;
