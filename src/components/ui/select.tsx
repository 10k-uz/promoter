import { singleCategory } from "../../interfaces";

interface selectType {
  defaultValue?: string;
  items?: singleCategory[];
  setCategoryId?: any;
  isLoading?: boolean;
}

const Select = ({
  defaultValue = "Tanlash",
  items,
  setCategoryId,
}: selectType) => {
  const handleChange = (e: any) => {
    const value = e.target.value;
    if (value === "default" || value === 0) {
      return setCategoryId("default");
    }
    setCategoryId(value);
  };

  return (
    <select
      name="cars"
      onChange={handleChange}
      className="bg-white cursor-pointer px-4 outline-none appearance-none shadow-md rounded-md placeholder:text-[16px]  focus:border-[#9D1F4F] border-[0.2px] max-lg:w-full max-md:py-2 "
    >
      <option value="default">{defaultValue}</option>
      {items?.map((item) => {
        return (
          <option key={item.id || -1} value={item.id || 0}>
            {item.name || "loading..."}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
