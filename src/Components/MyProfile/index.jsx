import React from "react";
import { ProfileWrapper } from "./Profile.styles";
import Profile from "./Profile";
import Rating from "./Rating";
import About from "./About";
import Skills from "./Skills";
import Analysis from "./Analysis";
import Education from "./Education";
import { Educationdata, Experiencedata } from "../Constant/Data";
import Certificate from "./Certificate";
import UpcomingSession from "../Sessions/UpcomingSession";
import CompletedSession from "../Sessions/CompletedSession";
import SessionTopic from "./SessionTopic";
import Progressbar from "./Progressbar";
const MyProfile = () => {
  return (
    <ProfileWrapper>
      <div className="proflewrap">
        <Profile />
        <SessionTopic/>
        <About />
        <Analysis />
        <Skills />
        <Education data={Experiencedata} />
        <Education data={Educationdata} />
        <Certificate />
        <UpcomingSession/>
        <CompletedSession/>
        <div className="flexwrap">
        <Rating />
        <Progressbar/>
        </div>

      </div>
    </ProfileWrapper>
  );
};

export default MyProfile;
