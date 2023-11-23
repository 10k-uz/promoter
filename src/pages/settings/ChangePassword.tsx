import { ChangePasswordForm } from "../../forms/";

const ChangePassword = () => {
  return (
    <div className="flex flex-col gap-4 mt-5">
      <h1 className="text-2xl font-semibold">Parolni o'zgartirish</h1>
      <ChangePasswordForm />
    </div>
  );
};

export default ChangePassword;
