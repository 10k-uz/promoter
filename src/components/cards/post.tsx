import { AddLinkOutlined, Telegram } from "@mui/icons-material";
import { useState } from "react";
import { StreamAlert, Button } from "../ui";
import { ToastType, customToast, dateFormatter } from "../../utils";
import { useGetDepositStatus, useStreams } from "../../hooks";
import { singlePostType } from "../../interfaces";
import { useCopyToClipboard } from "usehooks-ts";
import { WEB_VIEW_URL } from "../../configs";

const PostCard = ({ data }: { data: singlePostType }) => {
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [isCreated, setCreated] = useState(false);
  const [stream, setCreatedStream] = useState<{ id: number }>();
  const [value, copy] = useCopyToClipboard();

  const { createStream } = useStreams({}, "FALL");

  const onStreamCreate = (title: string) => {
    let prepareData = {
      name: title,
      postId: data.id,
    };

    // create stream
    createStream.mutate(prepareData, {
      onSuccess(data) {
        setCreatedStream(data.data?.info);

        setCreated(true);
        customToast(ToastType.SUCCESS, "Oqim yaratildi!");
      },
    });
  };

  const onStreamCopy = () => {
    setCreated(true);
    copy(`${WEB_VIEW_URL}/s/${stream?.id}/p/${data.id}`);
    customToast(ToastType.SUCCESS, "Oqimdan nusxa olindi!");
    setCreated(false);
    setAlertOpen(false);
  };

  return (
    <div className="flex flex-col bg-white rounded-md shadow-md">
      <img
        src={data.cover_image}
        width={300}
        height={0}
        alt="image not loaded "
        className="max-md:w-full h-[200px]"
      />
      <div className="p-2 m-0 flex flex-col gap-3">
        <h1 className="font-medium text-[15px] leading-5">
          {data.title.slice(0, 90)}
        </h1>

        <div className="flex gap-1">
          <img
            src={"/assets/date.svg"}
            width={12}
            height={12}
            alt="not loadded"
          />
          <span className="text-[12px]">
            {dateFormatter(String(data?.createdAt!))}
          </span>
        </div>

        {/* buttons */}
        <div className={`gap-2 grid grid-cols-2 max-md:grid-cols-2`}>
          {/* create stream */}
          <Button onClick={() => setAlertOpen(true)}>
            <AddLinkOutlined style={{ color: "white" }} />
          </Button>

          <Button>
            <Telegram style={{ color: "white" }} />
          </Button>
        </div>
      </div>

      <StreamAlert
        isOpen={isAlertOpen}
        onClose={() => {
          setAlertOpen(false);
          setCreated(false);
        }}
        onStreamCreate={onStreamCreate}
        isCreated={isCreated}
        onStreamCopy={onStreamCopy}
        createdStreamData={stream}
        isLoading={createStream.isLoading}
      />
    </div>
  );
};

export default PostCard;
