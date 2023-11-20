import { FC, useEffect, useState } from "react";
import { DateTime } from "luxon";
 

const LiveClock: FC = () => {
  const [time, setTime] = useState(DateTime.now());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setTime(DateTime.now());
  };

  return (
    <div className="flex flex-col">
      <div className="text-5xl font-extrabold">
        {time.toLocaleString(DateTime.TIME_24_SIMPLE)}
      </div>
      <div className="text-2xl font-normal">
        {time.toLocaleString(DateTime.DATE_HUGE)}
      </div>
    </div>
  );
};

export default LiveClock;