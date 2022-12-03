import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import StudentAbout from "../Content/Student/StudentAbout";
import Achievements from "../Content/Student/Achievements";
import Future from "../Content/Student/Future";
import BackBtn from "../components/BackBtn";

function Student() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
  }, []);
  return (
    <>      
      <Navbar title={"Andrés Matías Garbarz"} />
      <BackBtn />
      <StudentAbout />
      <Achievements />
      <Future />
    </>
  );
}

export default Student;
