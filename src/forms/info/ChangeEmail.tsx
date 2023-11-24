import { useState } from "react";
import { Button, Input, Timer } from "../../components/ui";

const ChangeEmailForm = () => {
  const [isCodeSent, setCodeSent] = useState(false);
  const [isExpired, setExpired] = useState(false);

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex gap-4 w-full max-md:flex-col">
        <div className="w-[40%] flex gap-2 max-md:w-full">
          <Input placeholder="Email manzilini kiriting" type="email" />
        </div>
        {isCodeSent && (
          <div className="flex gap-3">
            <Input placeholder="Kodni kiriting" type="number" />
            {/* {!isExpired && <Timer setExpired={setExpired} expireTime={60} />} */}
          </div>
        )}
        <div>
          {!isCodeSent ? (
            <Button onClick={() => setCodeSent(true)}>SMS kodni olish</Button>
          ) : isExpired ? (
            <Button onClick={() => setExpired(false)}>Qayta yuborish</Button>
          ) : (
            <Button>Tasdiqlash</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangeEmailForm;
