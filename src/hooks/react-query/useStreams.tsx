import { useMutation, useQuery } from "react-query";
import { createStreamType, streamsService } from "../../services";
import { queryParamsType } from "../../interfaces";
import { ToastType, customToast } from "../../utils";

const useStreams = (queryParams: queryParamsType, usageType: string) => {
  const createStream = useMutation({
    mutationKey: ["createStream"],
    mutationFn: (data: createStreamType) => {
      return streamsService.createStream(data);
    },
    onError(error: any) {
      console.log(error);
      customToast(
        ToastType.ERROR,
        error?.response?.data?.message || "Error while creating stream!"
      );
    },
  });

  const getStreams = useQuery({
    queryKey: ["getStreams", queryParams],
    queryFn: () => {
      return streamsService.getStreams(queryParams);
    },
    enabled: usageType === "GET_STREAMS",
  });

  const deleteStream = useMutation({
    mutationKey: ["deleteStream"],
    mutationFn: (streamId: number) => {
      return streamsService.deleteStream(+streamId);
    },
  });

  return { createStream, getStreams, deleteStream };
};

export default useStreams;
