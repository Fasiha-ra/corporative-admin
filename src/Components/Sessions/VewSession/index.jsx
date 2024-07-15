import React from "react";
import { ViewWrap } from "./View.astyles";

import Accordions from "../../Accordions";
import { items } from "../../Constant/Data";
import Button from "../../Button";
import date from "../../../assets/session/calendar.png";
import time from "../../../assets/session/time.png";
import sessionImg from "../../../assets/session/upcomingSession.png";
import employe from "../../../assets/session/employe.png";
import employes from "../../../assets/session/employes.png";
import { useNavigate } from "react-router-dom";
import backarrow from "../../../assets/session/backarrow.png";
import logo from "../../../assets/session/logo.png";
import stars from "../../../assets/session/stars.png";
const ViewSession = () => {
  const navigate = useNavigate();
  const backToPage = () => {
    navigate("/sessions");
  };
  const BookSession = () => {
    navigate("/SessionLayout");
  }
  return (
    <ViewWrap>
      <div className="backarrow" onClick={backToPage}>
        <img src={backarrow} alt="backarrow" />
      </div>
      <div className="view">
        <div className="sessionDetail">
          <div className="textHolder">
            <h2>Change Management : Leading Agile Systems Change Management</h2>
            <div className="logoWrap">
              <figure className="logo">
                <img src={logo} alt="logo" />
              </figure>
              <div className="logotext">
                <strong className="name">By : Ankita Sharma</strong>
                <span className="designation">Talent Management</span>

                <figure className="stars">
                  <img src={stars} alt="stars" />
                </figure>
              </div>
            </div>
            <div className="date flex">
              <figure>
                <img src={date} alt="date" />
              </figure>
              <span>April 30, 2024 - May 07, 2024</span>
            </div>
            <div className="time flex">
              <figure>
                <img src={time} alt="time" />
              </figure>
              <span>09:00 pm - 11:00 pm</span>
            </div>
            <div className="session flex">
              <figure>
                <img src={employes} alt="employes" />
              </figure>
              <span>20 Employees Enrolled</span>
            </div>
            <div className="btns" onClick={BookSession}>
              <Button width="150px">Book Session</Button>
            </div>
          </div>
          <figure className="thumb">
            <img src={sessionImg} alt="sessionImg" />
          </figure>
        </div>
        <div className="sessionPara">
          <h4>About Session</h4>
          <p>
            Change is now and forever. It is not optional any more than
            breathing and sleeping and doing it well is a requirement of
            organization health. Learning to capture the competitive advantage
            of a changing landscape is an essential skill for leaders.
            <br />
            This course is based on the forty five years of experience helping
            companies like Merck, Shell Oil, Honeywell, Honda and dozens of
            others to create cultures of engagement and continuous improvement.
          </p>
        </div>
        <div className="Accordions">
          <h4>Topics</h4>
          <Accordions items={items} />
        </div>
      </div>
    </ViewWrap>
  );
};

export default ViewSession;
