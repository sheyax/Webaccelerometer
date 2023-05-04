import SideBar from "@/components/Sidebar";
import DriverList from "@/components/DriversList";
export default function driverPage() {
  return (
    <div className={`bg-slate-200 min-h-screen`}>
      <div className="md:grid md:grid-cols-5 md:space-x-5 ">
        {/* Side bar */}
        <SideBar />

        {/*Main Dash board  */}
        <DriverList />
      </div>
    </div>
  );
}
