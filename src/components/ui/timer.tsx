import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import { timeFormatter } from "../../utils";

interface TimerProps {
  secondsLeft: number;
}

const Timer: React.FC<TimerProps> = ({ secondsLeft }) => {
  return (
    <div className="text-[15px] self-center flex gap-1 bg-white rounded-md border border-[#9D1F4F] shadow-md p-2">
      <TimerOutlinedIcon fontSize="small" />
      <span className="font-medium text-[13px]">
        {timeFormatter(secondsLeft)}
      </span>
    </div>
  );
};

export default Timer;
