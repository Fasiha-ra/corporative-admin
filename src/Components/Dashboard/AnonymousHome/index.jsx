import React from "react";
import Button from "../../Button";
import { IoIosArrowForward } from "react-icons/io";
import { AnalysisWrapper } from "./Anonymous.styles";
import PieArcLabel from "../PieChart/PieArcLabel";
import BasicLineChart from "../LineChart";
import BasicPie from "../PieChart";

const AnonymousHome = () => {
  return (
    <AnalysisWrapper>
      <div className="flex">
        <div className="text">
          <strong>Anonymous Forum</strong>
        </div>
        <div className="filterWrap">
          <Button>Today</Button>
          <Button type="white">
            Start Date - End Date <IoIosArrowForward />
          </Button>
        </div>
      </div>
      <div className="holder">
      <div className="lineChart">
      <BasicLineChart/>
      </div>
      <div className="barChart">
      <BasicPie />
      <div className="detailChart">
        <div className="textWrap">
          <div className="color"></div>
          <span>Talent Management</span>
        </div>
        <div className="textWrap">
          <div className="color"></div>
          <span>Women Empowerment</span>
        </div>
        <div className="textWrap">
          <div className="color"></div>
          <span>Advisory Program</span>
        </div>
        <div className="textWrap">
          <div className="color"></div>
          <span>Employee Growth</span>
        </div>
        <div className="textWrap">
          <div className="color"></div>
          <span>Personal Development</span>
        </div>
      </div>
      </div>
      </div>
    </AnalysisWrapper>
  );
};

export default AnonymousHome;
