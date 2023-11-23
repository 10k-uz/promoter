import { ChangeEmailForm } from "../../forms/";

const ChangeEmail = () => {
  return (
    <div className="flex flex-col gap-4 mt-5">
      <h1 className="text-2xl font-semibold">Emailni o'zgartirish</h1>
      <ChangeEmailForm />
    </div>
  );
};

export default ChangeEmail;
