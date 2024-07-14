import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Auth";
import { GlobalStyles } from "./Components/Global.styles";
import OTP from "./Components/Auth/OTP";
import Password from "./Components/Auth/Password";
import { AuthProvider } from "./Components/Context/Context";
import UploadProfile from "./Components/Auth/UploadProfile";
import AdminLayout from "./Components/adminLayout";
import SupportSec from "./Components/Support";
import CompanyProfile from "./Components/CompanyProfile";
import ForgetPass from "./Components/CompanyProfile/ChangePass/ForgetPass";
import SubscriptionDetail from "./Components/CompanyProfile/PlanDetail";
import Reports from "./Components/Reports";

const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
    <GlobalStyles/>
      <Routes>
       <Route index element={<SignUp />} />
        <Route path="/password" element={<Password />} />
       <Route path="/otp" element={<OTP />} />
        <Route path="/UploadProfile" element={<UploadProfile />} />
      
       <Route path="/" element={<AdminLayout />}>
       <Route path="/support" element={<SupportSec/>}/>
       <Route path="/reports" element={<Reports/>}/>
       <Route path="/CompanyProfile" element={<CompanyProfile/>}/>
       <Route path="/CompanyProfile/forgot-password" element={<ForgetPass/>}/>
       <Route path="/CompanyProfile/SubscriptionDetail" element={<SubscriptionDetail/>}/>
       </Route> 
       
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
