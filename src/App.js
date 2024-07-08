import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Auth";
import { GlobalStyles } from "./Components/Global.styles";
import OTP from "./Components/Auth/OTP";
import Password from "./Components/Auth/Password";
import { AuthProvider } from "./Components/Context/Context";
import UploadProfile from "./Components/Auth/UploadProfile";
import AdminLayout from "./Components/adminLayout";

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
       <Route path="/dash" element={<AdminLayout />}></Route> 
       
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
