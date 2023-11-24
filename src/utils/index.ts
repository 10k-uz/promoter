export * from "./toast";
export * from "./date";
export * from "./depositCalculator";

export const numberSpacer = (amount: number) => {
  if (isNaN(amount)) {
    throw new Error("Invalid number format");
  }
  return parseInt(String(amount), 10).toLocaleString().replace(/,/g, " ");
};
