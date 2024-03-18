import React from "react";
import RightSidebar from "../components/RightSidebar";
import Search from "../components/Search";
import StatData from "../components/StatData";




const Dashboard = () => {
  return (
    <div className="flex flex-grow">
      <div className="flex flex-col mb-4 flex-grow px-4 relative">
        <Search />
        <div className="relative flex">
          <h2 className="font-bold  py-8">Good Morning</h2>
        </div>
        <div className="flex">
           <StatData title="Total Percentage" value="361" primary="#11998E" secondary="#B9F2E5" mainPercentage="90" secondaryPercentage="26"/>
           <StatData title="Shorlisted Candidates" value="201" primary="#E7B860" secondary="#E0EDEA" mainPercentage="74" secondaryPercentage="45"/>
           <StatData title="Rejected Candidates" value="160" primary="#FF6A49" secondary="#E0EDEA" mainPercentage="74" secondaryPercentage="40"/>
    
        </div>
      </div>

      <RightSidebar />
    </div>
  );
};

export default Dashboard;
