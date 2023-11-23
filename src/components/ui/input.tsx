import React from "react";

interface InputProps {
  name?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  register?: any;
  setValue?: any;
  setCategoryId?: any;
  defaultValue?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "Izlash...",
  error,
  register,
  defaultValue,
  disabled,
  setValue,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full p-2 outline-none text-[15px] border border-[#8e8d8d6a] border-[1px] rounded-md focus:border-[#9D1F4F] shadow-md placeholder:text-[15px] ${
        error && "border-red-600"
      } ${disabled && "bg-white"}`}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={(e) => setValue(e.target.value)}
      {...register}
    />
  );
};

export default Input;
