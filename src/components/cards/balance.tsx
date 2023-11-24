const BalanceCard = ({ amount }: { amount: number | string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-center gap-1 items-center ">
      <img
        src={"/assets/verified_icon.svg"}
        alt="icon not loaded"
        width={56}
        height={56}
      />
      <h1 className="self-center text-[#474747] text-[15px]">Balans</h1>
      <h1 className="text-[22px] font-semibold">{amount || 0} uzs</h1>
    </div>
  );
};

export default BalanceCard;
