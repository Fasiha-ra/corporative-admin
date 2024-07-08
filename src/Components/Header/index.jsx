import React from "react";
import { HeaderWrap,  ToggleButton } from "./Header.styles";
import Logo from "../../assets/header/logo.png";
import MainLogo from "../../assets/header/mainLogo.png";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import profile from "../../assets/header/profile.png";
const Header = ({ toggleSidebar }) => {

  return (
    <HeaderWrap >
      <div className="container">
        <div className="logos">
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
            <img src={MainLogo} alt="MainLogo" className="mainLogo" />
          </Link>
          <ToggleButton onClick={toggleSidebar}>
          <FaLongArrowAltRight />
      </ToggleButton>
        </div>
        <div className="heading">
          <h2 className="title">Hi Corporate Admin , welcome back !</h2>
          <img src={profile} alt="profile" />
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
