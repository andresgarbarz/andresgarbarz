import React from "react";
import Navbar from "../components/Navbar";
import StudentAbout from "../Content/StudentAbout";
import Achievements from "../Content/Achievements";
import Future from "../Content/Future";
import BackBtn from "../components/BackBtn";

function Student() {
  return (
    <>
      
      <Navbar />
      <BackBtn />
      <StudentAbout />
      <Achievements />
      <Future />
    </>
  );
}

export default Student;
