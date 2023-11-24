import toastResponsive from "react-hot-toast";

export enum ToastType {
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

const customToast = (type: ToastType, message: string) => {
  switch (type) {
    case "SUCCESS":
      toastResponsive.success(`${message}`, {
        duration: 2000,
      });
      break;
    case "ERROR":
      toastResponsive.error(`${message}`, {
        duration: 3000,
      });
      break;
    default:
      toastResponsive("Something went wrong!");
      break;
  }
};

export { customToast };
