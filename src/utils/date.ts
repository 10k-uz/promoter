import dateFormat from "dateformat";

export const dateFormatter = (date: string) => {
  let paddedShortDate = dateFormat(date, "longDate");
  let shortTime = dateFormat(date, "shortTime");

  return `${paddedShortDate}, ${shortTime}`;
};

export const timeFormatter = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  if (+seconds < 60) {
    return seconds;
  }

  return `${formattedMinutes}:${formattedSeconds}`;
};
