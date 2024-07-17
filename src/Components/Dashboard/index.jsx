import React from "react";
import { DashboardWrap } from "./Dashboard.styles";
import StackBars from "./BarChart";
import BasicPie from "./PieChart";
import MarkOptimization from "./LineChart";
import BasicLineChart from "./LineChart";
import AnalysisSession from "./AnalysisSession";
import AnonymousHome from "./AnonymousHome";
import CoachFeedback from "./CoachFeedback";
const Dashboard = () => {
  return (
    <DashboardWrap>
      <AnalysisSession />
      <AnonymousHome/>
      <CoachFeedback/>
      {/* <StackBars /> */}
      {/* <BasicPie /> */}
     
      {/* <BasicLineChart /> */}
    </DashboardWrap>
  );
};

export default Dashboard;
