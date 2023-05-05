const SideBar = () => {
  return (
    <div className="col-span-1 md:min-h-full h-[80px] bg-white ">
      <div className="items-center md:space-y-2 p-5 flex justify-between md:flex-col md:block">
        <div className="hover:bg-gray-300 cursor-pointer p-2 rounded-lg text-gray-700 font-semibold">
          <a href="/"> Dashboard </a>
        </div>

        <div className="hover:bg-gray-300 cursor-pointer p-2 rounded-lg text-gray-700 font-semibold">
          <a href="/"> Vehicles </a>
        </div>

        <div className="hover:bg-gray-300 cursor-pointer p-2 rounded-lg text-gray-700 font-semibold ">
          <a href="/driverPage"> Drivers </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
