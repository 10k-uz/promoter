import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input } from "../components/ui";
import { usePromoter } from "../hooks";
import { updateInfoType } from "../services";
import { ToastType, customToast } from "../utils";
import { useEffect, useState } from "react";
import { queryClient } from "../app/main";

const ProfileForm = () => {
  const { updatePromoterInfo, getPromoter } = usePromoter("GET_PROMOTER");
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<updateInfoType>();

  const onSubmit: SubmitHandler<updateInfoType> = (data) => {
    if (!data.first_name) {
      data.first_name = userInfo.first_name;
    } else if (!data.last_name) {
      data.last_name = userInfo.last_name;
    }

    if (data.first_name && data.last_name) {
      updatePromoterInfo.mutate(data, {
        onSuccess() {
          customToast(ToastType.SUCCESS, "Ma'lumotlar saqlandi!");
        },
        onError(error: any) {
          customToast(
            ToastType.ERROR,
            error.response.data.message || "Something went wrong"
          );
        },
      });
    }
  };

  useEffect(() => {
    queryClient.invalidateQueries(["getPromoter"]);
    setUserInfo(getPromoter.data?.data?.info);
  }, [getPromoter.data?.data?.info]);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
        <div>
          <Input
            defaultValue={userInfo?.first_name}
            register={register("first_name", {
              minLength: {
                value: 3,
                message: "Ism 3 ta belgidan kam bo'lmasligi kerak",
              },
              maxLength: {
                value: 20,
                message: "Ism 20 ta belgidan oshmasligi kerak",
              },
            })}
            placeholder="ism kiritilmagan"
          />
          <span className="text-red-600 text-[15px]">
            {errors.first_name?.message}
          </span>
        </div>
        <div>
          <Input
            defaultValue={userInfo?.last_name}
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
            placeholder="familiya kiritilmagan"
          />
          <span className="text-red-600 text-[15px]">
            {errors.last_name?.message}
          </span>
        </div>

        <Input
          defaultValue={userInfo?.email}
          disabled
          placeholder="email kiritilmagan"
        />
      </div>
      <div className="w-1/4 max-md:w-full">
        <Button isLoading={updatePromoterInfo.isLoading}>
          O'zgarishlarni saqlash
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
