import React, { useState } from "react";
import { ProfileHold } from "./Profile.styles";
import BG from "../../../assets/profile/bgimg.png";
import Logo from "../../../assets/profile/profileimg.png";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";
import backArrow from "../../../assets/profile/backArrow.png";
import Modal from "../../Modal"
import TopicsPopup from "../SessionTopic/TopicsPopup";
import DateTime from "../SessionModals/DateTime";
import Session from "../SessionModals/Session";
import Scheduled from "../SessionModals/Scheduled";

const Profile = () => {
  const navigate = useNavigate();
  const backToPage = () => {
    navigate("/CoachProfile")
  }
  
  const [bgImage, setBgImage] = useState(BG);
  const [logoImage, setLogoImage] = useState(Logo);
  const [bookSession, setBookSession] = useState(false);
  const [dateTime, setDateTime] = useState(false);
  const [sessionType, setSessionType] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [schedule, setSchedule] = useState(false);
  const [selectedSessionTypes, setSelectedSessionTypes] = useState([]);
  const [inputFieldData, setInputFieldData] = useState("");

  const handleTimeSelect = (date, time, sessionTypes, inputFieldData) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setSelectedSessionTypes(sessionTypes);
    setInputFieldData(inputFieldData);
    setDateTime(false);
    setSessionType(true);
  };

  const bookSessionOpen = () => {
    setBookSession(true);
  }
  const DateTiemOpen= () => {
    setBookSession(false);
    setDateTime(true);
  }
  const ScheduleOpen = () => {
    setSessionType(false);
    setSchedule(true);
  }

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file (jpg, jpeg, png).");
    }
  };

  return (
    <ProfileHold>
      <div className="backimg" onClick={backToPage}>
        <img src={backArrow} alt="backarrrow" />
      </div>
      <div className="bgImg" onClick={() => document.getElementById('bgInput').click()}>
        <img src={bgImage} alt="background" />
        <input
          id="bgInput"
          type="file"
          accept="image/jpeg,image/png,image/jpg"
          style={{ display: "none" }}
          onChange={(e) => handleImageChange(e, setBgImage)}
        />
      </div>
      <div className="logo" onClick={() => document.getElementById('logoInput').click()}>
        <figure>
          <img src={logoImage} alt="logo" />
          <input
            id="logoInput"
            type="file"
            accept="image/jpeg,image/png,image/jpg"
            style={{ display: "none" }}
            onChange={(e) => handleImageChange(e, setLogoImage)}
          />
        </figure>
      </div>
      <div className="textxWrap">
        <div className="text">
          <h2>Rahul Wagh</h2>
          <p>Talent Management Sessions</p>
          <strong>Human Rights | Women Empowerment</strong>
        </div>
        <div className="btn" onClick={bookSessionOpen}>
          <Button width="208px">Book Session</Button>
        </div>
      </div>
      {bookSession && (
        <Modal open={bookSession} setOpen={setBookSession} width="1510px">
          <TopicsPopup click={DateTiemOpen}/>
        </Modal>
      )}
      {dateTime && (
        <Modal open={dateTime} setOpen={setDateTime} width="1510px">
          <DateTime setOpen={setDateTime} onSelectTime={handleTimeSelect}/>
        </Modal>
      )}
      {sessionType && (
        <Modal open={sessionType} setOpen={setSessionType} width="1510px">
          <Session
            setOpen={setSessionType}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            click={ScheduleOpen}
            setSelectedSessionTypes={setSelectedSessionTypes}
            setInputFieldData={setInputFieldData}
          />
        </Modal>
      )}
      {schedule && (
        <Modal open={schedule} setOpen={setSchedule} width="1510px">
          <Scheduled
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedSessionTypes={selectedSessionTypes}
            inputFieldData={inputFieldData}
            setOpen={setSchedule}
            click={backToPage}
          />
        </Modal>
      )}
    </ProfileHold>
  );
};

export default Profile;
