import { numberSpacer } from "../../utils";

const DepositCard = ({ deposit = 0 }: { deposit: number }) => {
  let left_percent = deposit;

  return (
    <div className="rounded-md px-5 py-7 bg-white shadow-md flex flex-col gap-1">
      {left_percent <= 0 ? (
        <h1 className="font-medium text-center text-gray-700">
          Deposit uchun qo'yilgan pullar tugadi! Iltimos kuting.
        </h1>
      ) : (
        <>
          <div className="flex flex-col gap-1 mb-2">
            <div className="flex justify-between">
              <h1 className="text-[15px] font-medium">Deposit:</h1>
              <h1 className="font-semibold max-md:text-[14px]">
                {numberSpacer(deposit)} so'm
              </h1>
            </div>
          </div>
          <div className="bg-blue-100 rounded-md">
            <div
              className={`font-semibold bg-[#f02416] rounded-md  h-[5px]`}
              style={{
                width: "100%",
              }}
            ></div>
          </div>
        </>
      )}
    </div>
  );
};

export default DepositCard;
