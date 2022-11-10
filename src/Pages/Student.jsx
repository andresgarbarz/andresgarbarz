import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import StudentAbout from "../Content/StudentAbout";
import Achievements from "../Content/Achievements";
import Future from "../Content/Future";
import BackBtn from "../components/BackBtn";

function Student() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
  }, []);
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
