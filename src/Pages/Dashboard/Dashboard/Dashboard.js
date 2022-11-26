import React from "react"; 
import welcome from "../../../asset/welcome.png";

const Dashboard = () => {
  return (
    <div className="pointer-events-none select-none">
      <div className="w-[75%] md:w-1/2 mx-auto relative"> 
        <img src={welcome} alt="" />
        <h3 className="text-center text-4xl font-extrabold absolute bottom-0 md:bottom-5 lg:bottom-10 right-0 left-7 md:left-20 text-[#52b0fa] drop-shadow-lg shadow-[#165db8]">
          To
        </h3>
        <h2 className="text-center text-4xl md:text-6xl font-extrabold absolute md:-bottom-8 lg:-bottom-5 right-0 left-0 md:-left-0 lg:left-20 text-[#52b0fa] drop-shadow-lg shadow-[#165db8]">Dashboard</h2>
      </div>
    </div>
  );
};

export default Dashboard;
