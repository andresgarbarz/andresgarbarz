import React from "react";
import "../../css/Student/StudentAbout/StudentAbout.css"
import Navbar from "../../components/Navbar";
import Andy from "../../assets/student/about/yofacha 1.png";
import logoOrt from "../../assets/student/about/ortlogo2.png";
import gorroUni from "../../assets/student/about/Subtract.png";
import satLogo from "../../assets/student/about/image 17.png";
import podio from "../../assets/student/about/podio.png";
import piano from "../../assets/student/about/pianito.png";
import basketball from "../../assets/student/about/pelota.png";
import israelFlag from "../../assets/student/about/israelflagceremony 1 1.png";
import english from "../../assets/student/about/english_logo.png";
import hebrew from "../../assets/student/about/hebreoicon (2) 1.png";
import spanish from "../../assets/student/about/image 15.png";
import chinese from "../../assets/student/about/image 16.png";
import five from "../../assets/student/about/Group 1.png";
import three from "../../assets/student/about/Group 3.png";
import one from "../../assets/student/about/Group 4.png";

function StudentAbout() {
  return (
    <div className="wrapper-ab" id="about">
      {/* Áca va el link para volver a la home*/}
      <div className="content">
        
        <div className="sides">
          <div className="left-side">
            <div className="title">
              <img src={logoOrt} alt="ORT school logo" />
              <h1>12th grade student at ORT High School</h1>
            </div>
            <div className="info">
              <div className="column-l">
                <div className="ICT">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#0C043F"
                      stroke-width="10"
                    />
                    <path
                      d="M28.0301 51.4615V33.9631H21.0916V27.7692H42.9562V33.9631H36.0178V51.4615H28.0301ZM45.0309 51.4615V27.7692H53.0186V51.4615H45.0309ZM69.1161 52.0031C67.2208 52.0031 65.4608 51.7098 63.8361 51.1231C62.2341 50.5139 60.8351 49.6564 59.6392 48.5508C58.4659 47.4451 57.552 46.1364 56.8977 44.6246C56.2433 43.1128 55.9161 41.4431 55.9161 39.6154C55.9161 37.7877 56.2433 36.118 56.8977 34.6062C57.552 33.0944 58.4659 31.7857 59.6392 30.68C60.8351 29.5744 62.2341 28.7282 63.8361 28.1415C65.4608 27.5323 67.2208 27.2277 69.1161 27.2277C71.4402 27.2277 73.4936 27.6339 75.2761 28.4462C77.0813 29.2585 78.5705 30.4318 79.7438 31.9662L74.7008 36.4677C74.0013 35.5877 73.2228 34.9108 72.3654 34.4369C71.5305 33.9405 70.5828 33.6923 69.5223 33.6923C68.6874 33.6923 67.9315 33.8277 67.2546 34.0985C66.5777 34.3692 65.991 34.7641 65.4946 35.2831C65.0208 35.8021 64.6485 36.4339 64.3777 37.1785C64.1069 37.9005 63.9715 38.7128 63.9715 39.6154C63.9715 40.518 64.1069 41.3415 64.3777 42.0862C64.6485 42.8082 65.0208 43.4287 65.4946 43.9477C65.991 44.4667 66.5777 44.8615 67.2546 45.1323C67.9315 45.4031 68.6874 45.5385 69.5223 45.5385C70.5828 45.5385 71.5305 45.3015 72.3654 44.8277C73.2228 44.3313 74.0013 43.6431 74.7008 42.7631L79.7438 47.2646C78.5705 48.7764 77.0813 49.9498 75.2761 50.7846C73.4936 51.5969 71.4402 52.0031 69.1161 52.0031Z"
                      fill="#0C043F"
                    />
                    <path
                      d="M44.6155 70L57.3078 57.6923L62.6924 63.4615L55.3847 70.3846L61.9232 76.923L56.9232 82.3076L44.6155 70Z"
                      fill="#E71367"
                    />
                    <path
                      d="M55.3846 70L43.4615 58.4615L38.0769 63.4615L44.6154 70L38.0769 77.3077L43.4615 82.3077L55.3846 70Z"
                      fill="#0C043F"
                    />
                  </svg>

                  <h2>ICT Track</h2>
                </div>
                <div className="GPA">
                  <img src={gorroUni} alt="Mortarboard icon" />
                  <h2>9.92/10 GPA</h2>
                </div>
                <div className="music">
                  <img src={piano} alt="Piano icon" />
                  <h2>School band pianist</h2>
                </div>
              </div>

              <div className="column-r">
                <div className="SAT">
                  <img src={satLogo} alt="SAT icon" />
                  <h2>1480 SAT Score</h2>
                </div>
                <div className="ranking">
                  <img src={podio} alt="Podio icon" />
                  <h2>1st class rank out of 520 students</h2>
                </div>
                <div className="basketball">
                  <img src={basketball} alt="Basketball icon" />
                  <h2>Varsity Basketball Player</h2>
                </div>
              </div>
            </div>
            <div className="bearer">
              <img src={israelFlag} alt="Israel flag" />
              <h2>
                <span>Standard Bearer</span>
                (Honor Student Award)
              </h2>
            </div>
          </div>
          <div className="right-side">
            <img src={Andy} alt="Andy Garbarz smiling" id="main-pic" />
            <div className="languages">
              <div>
                <div className="spanish">
                  <img src={spanish} alt="Spain flag" className="flag" />
                  <img src={five} alt="#" />
                </div>
                <div className="english">
                  <img src={english} alt="UK & USA flag" className="flag"  />
                  <img src={five} alt="#" />
                </div>
              </div>
              <div>
                <div className="hebrew">
                  <img src={hebrew} alt="Israel flag" className="flag" />
                  <img src={three} alt="#" />
                </div>
                <div className="chinese">
                  <img src={chinese} alt="China flag" className="flag" />
                  <img src={one} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentAbout;
