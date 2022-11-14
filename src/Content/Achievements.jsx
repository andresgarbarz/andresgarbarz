import React from "react";
import "./../css/Achievements/Achievements.css";
import CS50W from './../assets/future/CS50W.png';
import ortLaunchpad from './../assets/future/launchpad.png';
import rsk from './../assets/future/rsk.png';
import IBM from './../assets/future/Group 23.png';
import ticLab from './../assets/future/image 36.png';
import abuelos from './../assets/future/image 35.png';
import starters from './../assets/future/image 18.png';
import movers from './../assets/future/image 19.png';
import flyers from './../assets/future/image 20.png';
import key from './../assets/future/image 21.png';
import pet from './../assets/future/image 22.png';
import first from './../assets/future/image 23.png';
import advanced from './../assets/future/image 24.png';
import sat from './../assets/future/image 25.png';
import duolingo from './../assets/future/image 26.png';
import stem from './../assets/future/image 32.png';
import mvp from './../assets/future/image 34.png';
import tic from './../assets/future/Group 11.png';

function Achievements() {
  return (
    <div className="wrapper-ac" id="achievements">
      {/* <a
        href="https://andresgarbarz.netlify.app/#sections"
        className="btn-back-container"
      >
        <div className="btn-back-content">
          <svg
            width="29"
            height="27"
            viewBox="0 0 29 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9004 0.564866C15.6554 1.31802 15.6554 2.53912 14.9004 3.29228L6.60081 11.5714H27.0667C28.1344 11.5714 29 12.4349 29 13.5C29 14.5651 28.1344 15.4286 27.0667 15.4286H6.60081L14.9004 23.7077C15.6554 24.4609 15.6554 25.682 14.9004 26.4351C14.1454 27.1883 12.9213 27.1883 12.1663 26.4351L0.56626 14.8637C-0.188753 14.1106 -0.188753 12.8894 0.56626 12.1363L12.1663 0.564866C12.9213 -0.188289 14.1454 -0.188289 14.9004 0.564866Z"
              fill="#4EABFF"
            />
          </svg>
          <span>Back</span>
        </div>
      </a>{" "} */}
      <div className="columns">
        <div className="courses-activities">
          {" "}
          <h2>Courses & Activities</h2>
          <img src={CS50W} alt="" />
          <img src={ortLaunchpad} alt="" />
          <img src={rsk} alt="" />
          <img src={IBM} alt="" />
          <h2>Educación Financiera</h2>
          <div>
            <img src={ticLab} className="ticLab" alt="" />
            <img src={abuelos} alt="" />
          </div>
        </div>
        <div className="international-exams">
          <h2>International Exams</h2>
          <div>
            <img src={starters} alt="" />
            <i>Pass with distinction</i>
          </div>
          <div>
            <img src={movers} alt="Movers" />
            <i>Pass with distinction</i>
          </div>
          <div>
            <img src={flyers} alt="Flyers" />
            <i>Pass with distinction</i>
          </div>
          <div>
            <img src={key} alt="Key" />
            <i>Pass with distinction</i>
          </div>
          <div>
            <img src={pet} alt="PET" />
            <i>Pass</i>
          </div>
          <div>
            <img src={first} alt="FCE" />
            <i>179</i>
          </div>
          <div>
            <img src={advanced} alt="CAE" />
            <i>195</i>
          </div>
          <div>
            <img src={sat} alt="SAT Exam" />
            <i>
              -
              <br />
              720 R&W
              <br />
              760 math
            </i>
          </div>
          <div>
            <img src={duolingo} alt="Duolingo Exam" />
            <i>140</i>
          </div>
        </div>
        <div className="school-awards">
          <h2>School Awards</h2>
          <h3>
            Nominated for trips to <span className="london">London</span><br/> &{" "}
            <span className="Puerto">Puerto Madryn</span> for my grades
          </h3>
          <div>
            <img src={stem} alt="STEM Logo" />
            <p>1st Place - World ORT STEM<br/>Communications Award</p>
          </div>
          <div>
            <img src={tic} alt="TIC Experience Logo" />
            <p>
              10th & 11th year projects nominated<br/>for TIC Experience 2021 & 2022
            </p>
          </div>
          <div>
            <img src={mvp} alt="MVP Experience Logo" />
            <p>12th year project nominated for<br/>MVP Experience 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
