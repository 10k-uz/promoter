import { Link } from "react-router-dom";
import { Input, Button } from "../ui";
import { useForm, SubmitHandler } from "react-hook-form";

interface alertType {
  isOpen: boolean;
  onClose: any;
  onStreamCreate: any;
  isCreated: boolean;
  onStreamCopy: any;
  isLoading?: boolean;
  createdStreamData: any;
}

const StreamAlert = ({
  isOpen,
  onClose,
  isCreated,
  onStreamCopy,
  createdStreamData,
  isLoading,
  onStreamCreate,
}: alertType) => {
  if (!isOpen) return null;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ title: string }>();

  const onSubmit: SubmitHandler<{ title: string }> = ({ title }) => {
    onStreamCreate(title);
  };

  return (
    <>
      <div
        className="fixed left-0 right-0 top-0 bottom-0 bg-slate-800 opacity-40"
        onClick={onClose}
      ></div>
      <div className="bg-white p-8 fixed top-1/3 left-[35%] right-[35%] w-auto max-lg:left-[8%] max-lg:right-[8%] rounded-md">
        <div className="flex flex-col justify-center gap-3 m-0 p-0">
          <div className="flex justify-between">
            <h1
              className={`text-[18px] font-semibold ${
                isCreated && "text-[#9D1F4F]"
              } `}
            >
              Oqim yarati{isCreated ? "ldi" : "sh"}!
            </h1>
            <button className="text-[20px] p-0 m-0 font-bold" onClick={onClose}>
              &times;
            </button>
          </div>

          {isCreated ? (
            <div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <h1 className="font-medium">ID:</h1>
                  <Link
                    to={"https://loadmore.com/stream/2332323"}
                    target="_blank"
                    className="text-[15px]"
                  >
                    #{createdStreamData?.id}
                  </Link>
                </div>

                <hr className="border-b-[1px] border-b-black" />

                <div className="flex justify-between">
                  <h1 className="font-medium">Oqim nomi:</h1>
                  {createdStreamData.name}
                </div>
              </div>

              <form className="flex justify-center mt-1">
                <Button onClick={onStreamCopy}>URL nusxalash</Button>
              </form>
            </div>
          ) : (
            <form
              className="flex flex-col gap-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                placeholder="Oqim nomi"
                key={"create_stream"}
                register={register("title", {
                  required: "Oqim nomi to'ldirilishi shart",
                  maxLength: {
                    value: 20,
                    message: "Oqim nomi maximal 50 ta symbol bolishi kerak!",
                  },
                  minLength: {
                    value: 4,
                    message: "Oqim nomi minimal 3 ta symbol bo'lishi kerak",
                  },
                })}
                error={errors.title?.message}
              />
              <span className="text-red-600 text-[15px]">
                {errors.title?.message}
              </span>
              <Button isLoading={isLoading}>Yaratish</Button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default StreamAlert;
