import React, { useEffect, useState } from "react";

export default function Clock() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date("mar 10 2024").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    countDown();
  });
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center bg-yellow-300 p-2 w-[45px] rounded-lg">
        <h1 className=" text-sm">{days}</h1>
        <h5 className="text-xs">Ngày</h5>
      </div>
      <div className="flex flex-col items-center bg-yellow-300 p-2 w-[45px] rounded-lg">
        <h1 className=" text-sm">{hours}</h1>
        <h5 className="text-xs">Giờ</h5>
      </div>
      <div className="flex flex-col items-center bg-yellow-300 p-2 w-[45px] rounded-lg">
        <h1 className=" text-sm">{minutes}</h1>
        <h5 className="text-xs">Phút</h5>
      </div>
      <div className="flex flex-col items-center bg-yellow-300 p-2 w-[45px] rounded-lg">
        <h1 className=" text-sm">{seconds}</h1>
        <h5 className="text-xs">Giây</h5>
      </div>
    </div>
  );
}
