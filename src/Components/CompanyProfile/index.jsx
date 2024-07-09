import React from "react";
import {
  CompanyWrapper,
  Table,
  TableData,
  TableHeader,
  TableRow,
} from "./CompanyProfile.styles";
import BG from "../../assets/companyprofile/BG.png";
import logo from "../../assets/companyprofile/logo.png";
import nexxt from "../../assets/companyprofile/nexxt.png";
import backarrow from "../../assets/support/backArrow.png";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./ChangePass";
const CompanyProfile = () => {
  const navigate = useNavigate();
  const backToPage = () => {
    navigate("/dashbord");
  };
  return (
    <CompanyWrapper>
      <div className="profile">
        <div className="arrow" onClick={backToPage}>
          <img src={backarrow} alt="arrow" />
        </div>
        <div className="bgimg">
          <img src={BG} alt="bgimg" />
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="InfosysLimited">
        <div className="wrapper">
          <span className="h1">Infosys Limited</span>
          <ul className="listed">
            <li>Hinjewadi Phase II, Pune, Maharashtra</li>
            <li>infosysltd@gmail.com</li>
            <li>Contact No: +91 8645368712</li>
            <li>Concern Person: Abhishet Mishra</li>
            <li>Email ID: abhishekinfy4@gmail.com</li>
            <li>Contact No: +91 9845876980</li>
          </ul>
        </div>
      </div>
      <div className="about">
        <div className="wrapper">
          <span className="h2">About Infosys Limited</span>
          <p>
            Infosys is a global leader in next-generation digital services and
            consulting. We enable clients in more than 56 countries to navigate
            their digital transformation.
          </p>
        </div>
      </div>
      <div className="Subscription">
        <div className="wrapper">
          <span className="h2">Subscriptions</span>
          <table>
            <thead>
              <tr>
                <th scope="col">Plan Name/Type</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">View Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Plan Name/Type">Gold</td>
                <td data-label="Start Date">01 Jan 2024</td>
                <td data-label="End Date">01 Jan 2025</td>
                <td data-label="View Details">
                  <img src={nexxt} alt="nextcon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="changepass">
        <ChangePassword/>
      </div>
    </CompanyWrapper>
  );
};

export default CompanyProfile;
