import { useState, useEffect } from "react";

export default function Home() {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [z, setZ] = useState(null);
  const [speed, setSpeed] = useState(null);
  const frequency = 60;

  let xVal = 0;
  let yVal = 0;
  let zVal = 0;
  useEffect(() => {
    window.addEventListener(
      "devicemotion",
      (e) => {
        if (e.acceleration.x !== 0) {
          xVal = xVal * 0.9 + e.acceleration.x * 0.1;
          yVal = yVal * 0.9 + e.acceleration.y * 0.1;
          zVal = zVal * 0.9 + e.acceleration.z * 0.1;

          setX(xVal);
          setY(yVal);
          setZ(zVal);

          const vx = x * 9.8;
          setSpeed(vx);
        } else {
          setX(0);
          setY(0);
          setZ(0);
        }
      },
      { frequency }
    );
  }, [frequency]);
  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-blue-400">
      <div className="flex flex-col bg-black p-5 w-4/5 items-center rounded-lg shadow-lg">
        <h1 className="font-semibold my-2 text-xl text-white">
          {" "}
          Accelerometer Test{" "}
        </h1>

        <div className="flex space-x-5">
          <p className="text-neutral-600"> Device motion X:</p>
          <p className="font-bold text-red-600">{x?.toFixed(2)}</p>
        </div>

        <div className="flex space-x-5">
          <p className="text-neutral-600"> Device motion Y: </p>

          <p className="font-bold text-green-600">{y?.toFixed(2)}</p>
        </div>

        <div className="flex space-x-5">
          <p className="text-neutral-600"> Device motion Z: </p>
          <p className="font-bold text-purple-600">{z?.toFixed(2)}</p>
        </div>
        <p className="my-2 border border-blue-300 p-2 rounded-md w-3/5 text-center text-neutral-600">
          {" "}
          Speed:{" "}
          <span className="font-semibold text-lg text-white">
            {" "}
            {speed?.toFixed(3)}{" "}
          </span>
        </p>
      </div>
    </div>
  );
}
