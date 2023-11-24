import { useEffect, useState } from "react";

const useCountDown = (defaultValue: number, setExpired: any) => {
  const [secondsLeft, setSecondsLeft] = useState(defaultValue);

  useEffect(() => {
    if (secondsLeft <= 0) {
      setExpired(true);
      return;
    }

    const timeout = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsLeft]);

  function start(seconds: number) {
    setSecondsLeft(seconds);
  }

  return { secondsLeft, start };
};

export default useCountDown;
