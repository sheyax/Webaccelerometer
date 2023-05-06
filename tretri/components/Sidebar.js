import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="col-span-1 md:min-h-full h-[80px] bg-white ">
      <div className="items-center md:space-y-2 p-5 flex justify-between md:flex-col md:block">
        <div
          onClick={() => router.push("/")}
          className="hover:bg-gray-300 cursor-pointer p-2 rounded-lg text-gray-700 font-semibold"
        >
          <h1> Dashboard </h1>
        </div>

        <div
          onClick={() => router.push("/")}
          className="hover:bg-gray-300 cursor-pointer p-2 rounded-lg text-gray-700 font-semibold"
        >
          <h1> Vehicles </h1>
        </div>

        <div
          onClick={() => router.push("/driverPage")}
          className="hover:bg-gray-300 cursor-pointer p-2 rounded-lg text-gray-700 font-semibold "
        >
          <h1> Drivers </h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
