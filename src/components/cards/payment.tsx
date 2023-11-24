import { PaymentForm } from "../../forms";

const PaymentCard = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-8">
      <div className="flex justify-between max-md:flex-col max-md:gap-2">
        <div className="flex gap-1 max-lg:justify-center">
          <img
            src={"/assets/payment.svg"}
            alt="icon not loaded"
            width={24}
            height={24}
          />
          <h1 className="font-bold text-[19px]">To'lovga so'rov berish</h1>
        </div>
        <div className="flex gap-[1px] max-md:hidden">
          <img
            src={"/assets/paymentMethods/humo.svg"}
            alt="not loaded"
            width={40}
            height={40}
          />
          <img
            src={"/assets/paymentMethods/uzcard.svg"}
            alt="not loaded"
            width={40}
            height={25}
          />
          <img
            src={"/assets/paymentMethods/mastercard.svg"}
            alt="not loaded"
            width={40}
            height={25}
          />
          <img
            src={"/assets/paymentMethods/visa.png"}
            alt="not loaded"
            width={40}
            height={25}
          />
        </div>
      </div>

      <PaymentForm />
    </div>
  );
};

export default PaymentCard;
