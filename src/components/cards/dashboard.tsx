interface cardType {
  image: string;
  label: string;
  amount?: number | string;
  rounded?: string;
  sufix?: string;
}

const DashboardCard = ({
  image,
  label,
  amount,
  rounded = "rounded-lg",
  sufix,
}: cardType) => {
  return (
    <div
      className={`flex gap-2 shadow-md px-3 py-4 bg-white ${rounded} max-lg:gap-3 max-md:gap-4`}
    >
      <img
        src={image}
        alt="image not loaded"
        height={70}
        width={70}
        className="self-center max-md:w-14"
      />

      <div className="flex flex-col justify-center">
        <span className="text-[#A7A7A7] font-medium text-[13px]">{label}</span>
        <h3 className="text-black font-semibold text-[16px]">
          {amount} {sufix || "uzs"}
        </h3>
      </div>
    </div>
  );
};

export default DashboardCard;
