import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import Body from "./Body";

const LandingPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default LandingPage;
