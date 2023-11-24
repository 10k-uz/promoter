import { queryClient } from "../app/main";
import { paymentRequestItems } from "../constants";
import { useTransactions } from "../hooks";
import { ToastType, customToast } from "../utils";
import { Button, Input } from "../components/ui";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  card_number: string;
  card_name: string;
  amount: number | string;
}

const PaymentForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm<IFormInput>();

  const { makeTrRequest, getTransactions } = useTransactions(
    {
      page: 1,
      limit: 5,
    },
    "GET_TRANSACTIONS"
  );

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    let newData = {
      amount: +data.amount,
      card_name: data.card_name,
      card_number: data.card_number,
    };

    makeTrRequest.mutate(newData, {
      onSuccess() {
        // opening a toast
        customToast(ToastType.SUCCESS, "To'lov uchun so'rovingiz yuborildi!");

        // setting values to default
        setValue("amount", "");
        setValue("card_name", "");
        setValue("card_number", "");

        // revalidating items from api
        queryClient.invalidateQueries(["getPromoter"]);
        getTransactions.refetch();
      },
      onError(error: any) {
        if (error.response.data.message === "Insufficient funds!") {
          customToast(ToastType.ERROR, "Hisobingizda mablag' yetarli emas!");
        }
        customToast(
          ToastType.ERROR,
          error.response.data.message || "500, Internal Server Error"
        );
      },
    });
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      {paymentRequestItems.map((items) => {
        return (
          <div key={items.id} className="flex justify-between ">
            <div className="w-[40%] max-md:hidden">
              <h1 className="text-[15px] leading-3  font-medium">
                {items.title}
              </h1>
              <span className="text-[13px] text-[#5E5E5E] font-normal">
                {items.descr}
              </span>
            </div>
            <div className="w-[50%] max-md:w-full">
              <div>
                <Input
                  placeholder={items.input_placeholder}
                  type={items.input_type}
                  register={register(items.input_name, {
                    required: `${items.error_label} to'ldirilishi shart`,
                    minLength: {
                      value: items.minLength || 0,
                      message: items.minLength_message,
                    },
                    maxLength: {
                      value: items.maxLength || Infinity,
                      message: `${items.title} maximal ${items.maxLength} belgi bo'lishi kerak`,
                    },
                    min: {
                      value: items.min!,
                      message: items.minLength_message,
                    },
                  })}
                />
                <span className="text-red-600 text-[15px]">
                  {errors[items.input_name]?.message}
                </span>
              </div>
            </div>
          </div>
        );
      })}

      <Button isLoading={makeTrRequest.isLoading}>Tasdiqlash</Button>
    </form>
  );
};

export default PaymentForm;
