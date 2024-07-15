import React from "react";
import { ProfileWrapper } from "./Profile.styles";
import { CoachProfile } from "../../Constant/Data";
import stars from "../../../assets/session/stars.png";
import Button from "../../Button";
const Profile = () => {
  return (
    <ProfileWrapper>
      <div className="wrapper">
        <strong className="heading">Coach Profile</strong>

        <div className="cardsHolder">
          {CoachProfile.map((val, ind) => (
            <div className="card" key={ind}>
              <figure className="thumb">
                <img src={val.img} alt={val.img} />
              </figure>
              <div className="textWrapper">
                <div className="textWrap">
                  <strong className="title">{val.name}</strong>
                  <strong className="subTitle">{val.sub}</strong>
                  <strong className="subTitle">{val.designation}</strong>
                </div>
                <div className="session">
                  <span>{val.title}</span>
                  <span>{val.title1}</span>
                </div>
                <div className="reviewHolder">
                  <div className="review">
                    <img src={stars} alt="stars" />
                    <span>{val.review}</span>
                  </div>
                  <Button width="138px">Book Session</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
