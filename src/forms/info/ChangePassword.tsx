import { Button, Input } from "../../components/ui";

const ChangePasswordForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1 ">
        <Input placeholder="Eski parol" />
        <Input placeholder="Yangi parol" />
      </div>
      <div className="w-1/4 max-md:w-full">
        <Button>Parolni o'zgartirish</Button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
