import KpiCard from "@/components/KpiCard";
import SideBar from "@/components/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import apidata from "@/apidata";
import ChartArea from "@/components/ChartArea";
import ChartBar from "@/components/BarChart";
import ListBar from "@/components/ListBar";

export default function Home() {
  const data = apidata;
  const driverData = [];
  const driverTrips = [];

  //get driver usernames
  apidata.map((item) => {
    return driverData.push(item.username);
  });

  //get each driver and trips
  apidata.map((item, i) => {
    var km = 0;
    item.dailyTrips.map((trip) => {
      const mileage = trip.endOdometer - trip.startOdometer;
      km += mileage;
    });

    const extractedData = {
      name: item.username,
      trips: item.dailyTrips.length,
      mileage: km,
    };
    driverTrips.push(extractedData);
  });

  //total trips per driver

  //get all trips and sort by date
  let sortedTrips = [];

  apidata.forEach((driver) => {
    let trips = driver.dailyTrips;
    trips.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    sortedTrips.push(
      ...trips.map((trip) => ({
        date: trip.date,
        mileage: trip.endOdometer - trip.startOdometer,
      }))
    );
  });

  let completedTrips = [];
  apidata.map((driver) => {
    let completed = 0;
    let incomplete = 0;

    driver.dailyTrips.map((trip) => {
      if (trip.completed == true) {
        completed++;
      } else {
        incomplete++;
      }
    });

    const exportData = {
      completed: completed,
      inprogress: incomplete,
    };

    completedTrips.push(exportData);
  });

  let totalComp = 0;
  let totalIncom = 0;

  completedTrips.map((trip) => {
    var comp = 0;
    totalComp += trip.completed;
    totalIncom += trip.inprogress;
  });

  const completionData = [
    {
      name: "Trips Completed",
      value: totalComp,
    },
    { name: "Trips in Progress", value: totalIncom },
  ];
  console.log(completionData);

  return (
    <div className={`bg-slate-200 min-h-screen`}>
      <div className="md:grid md:grid-cols-5 md:space-x-5 ">
        {/* Side bar */}
        <SideBar />

        {/*Main Dash board  */}
        <div className="md:col-span-3 md:p-5 p-2">
          <div className="md:flex  md:space-x-2 md:space-y-0 space-y-2">
            <KpiCard />
            <ListBar title="Trip Progress" data={completionData} />
          </div>
          <div className="mt-2  space-y-2">
            <ChartArea
              title={"Total daily trips (Km)"}
              dataChart={sortedTrips}
            />

            <ChartBar
              title={"Individual driver performance"}
              subtitle={"Representing driver trips and total mileage"}
              data={driverTrips}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
