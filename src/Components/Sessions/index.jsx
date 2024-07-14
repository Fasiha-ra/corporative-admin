import React from "react";
import { SessionWrap } from "./Sessions.styles";
import SessionHeader from "./SessionHeader";
import UpcomingSession from "./UpcomingSession";
import CompletedSession from "./CompletedSession";
import GroupSession from "./GroupSession";

const Sessions = () => {
  return (
    <SessionWrap>
      <SessionHeader />
      <UpcomingSession />
      <GroupSession/>
      <CompletedSession />
    </SessionWrap>
  );
};

export default Sessions;
