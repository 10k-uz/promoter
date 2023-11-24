import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/ui";
import { Button } from "../../components/ui";
import { usePromoter } from "../../hooks";
import { Link, useNavigate } from "react-router-dom";
import { ToastType, customToast } from "../../utils";

interface IFormInput {
  first_name: string;
  last_name?: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>();
  const navigate = useNavigate();

  const { promoterRegister } = usePromoter("FAIL");

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    promoterRegister.mutate(data, {
      onSuccess() {
        localStorage.setItem("authStep", "VERIFY_EMAIL");
        navigate("/auth/confirm");

        customToast(
          ToastType.SUCCESS,
          "Email manzilga bir martalik kod yuborildi"
        );
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
      <h1 className="font-semibold text-[20px]">Ro'yxatdan o'tish</h1>
      <form
        action="#"
        className="flex flex-col gap-1 w-[40%] max-md:w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="Ism"
          key={"texaat"}
          register={register("first_name", {
            required: "Ism to'ldirilishi shart!",
            minLength: {
              value: 3,
              message: "Ism 3 ta belgidan kam bo'lmasligi kerak",
            },
            maxLength: {
              value: 20,
              message: "Ism 20 ta belgidan oshmasligi kerak",
            },
          })}
        />
        <span className="text-red-600 text-[15px]">
          {errors.first_name?.message}
        </span>

        <Input
          placeholder="Familiya"
          register={register("last_name", {
            minLength: {
              value: 3,
              message: "Familiya 5 ta belgidan kam bo'lmasligi kerak",
            },
            maxLength: {
              value: 30,
              message: "Familiya 30 ta belgidan oshmasligi kerak",
            },
          })}
        />
        <span className="text-red-600 text-[15px]">
          {errors.last_name?.message}
        </span>

        <Input
          placeholder="Email"
          register={register("email", {
            required: "Email to'ldirilishi shart!",
            minLength: {
              value: 3,
              message: "Email 3 ta belgidan kam bo'lmasligi kerak",
            },
            maxLength: {
              value: 30,
              message: "Email 30 ta belgidan oshmasligi kerak",
            },
          })}
          type={"email"}
        />
        <span className="text-red-600 text-[15px]">
          {errors.email?.message}
        </span>

        <Input
          placeholder="Password"
          register={register("password", {
            required: "Password to'ldirilishi shart!",
            minLength: {
              value: 3,
              message: "Password 8 ta belgidan kam bo'lmasligi kerak",
            },
            maxLength: {
              value: 20,
              message: "Password 20 ta belgidan oshmasligi kerak",
            },
          })}
          type="password"
        />
        <span className="text-red-600 text-[15px]">
          {errors.password?.message}
        </span>

        <Button isLoading={promoterRegister.isLoading}>
          Ro'yxatdan o'tish
        </Button>
      </form>

      <h1 className="text-[14px]">
        Ro'yxatdan o'tganmisz?
        <Link
          to={"/auth/login"}
          className={`text-[#9D1F4F] font-medium cursor-pointer`}
        >
          {" "}
          Tizimga kirish
        </Link>
      </h1>
    </>
  );
};

export default RegisterForm;
