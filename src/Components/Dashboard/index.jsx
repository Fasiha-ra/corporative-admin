import React from "react";
import { DashboardWrap } from "./Dashboard.styles";
import StackBars from "./BarChart";
import BasicPie from "./PieChart";
import MarkOptimization from "./LineChart";
import BasicLineChart from "./LineChart";
import AnalysisSession from "./AnalysisSession";
const Dashboard = () => {
  return (
    <DashboardWrap>
      <AnalysisSession />
      {/* <StackBars /> */}
      {/* <BasicPie /> */}
     
      {/* <BasicLineChart /> */}
    </DashboardWrap>
  );
};

export default Dashboard;
