import { Link } from "react-router-dom";
import { ToastType, customToast, dateFormatter } from "../../utils";
import { streamData } from "../../interfaces";
import { useCopyToClipboard } from "usehooks-ts";
import { WEB_VIEW_URL } from "../../configs";

const StreamCard = ({ ...data }: streamData) => {
  const [value, copy] = useCopyToClipboard();

  return (
    <div className="px-5 py-5 rounded-lg shadow-md bg-white flex flex-col gap-2">
      <div className="flex justify-between">
        <h1 className="font-bold text-[19px]">{data.name}</h1>
      </div>
      <div className="flex gap-1">
        <img
          src={"/assets/date.svg"}
          width={12}
          height={12}
          alt="not loadded"
        />
        <span className="text-[12px]">{dateFormatter(data?.createdAt!)}</span>
      </div>

      <Link
        to={`${WEB_VIEW_URL}/s/${data.id}/p/${data.postId}`}
        target="_blank"
        className="py-1 px-2 bg-slate-200 rounded-md text-[14px] text-slate-700"
      >
        {`${WEB_VIEW_URL}/s/${data.id}/p/${data.postId}`}
      </Link>
      <button
        onClick={() => {
          copy(`${WEB_VIEW_URL}/s/${data.id}/p/${data.postId}`);
          customToast(ToastType.SUCCESS, "Oqimdan nusxa olindi!");
        }}
        className="bg-[#9D1F4F] rounded-md p-1 flex justify-center gap-1"
      >
        <img
          src={"/assets/copy.svg"}
          alt="icon not loaded"
          width={18}
          height={18}
          className="self-center"
        />
        <span className="text-white">Nusxa olish</span>
      </button>
    </div>
  );
};

export default StreamCard;
