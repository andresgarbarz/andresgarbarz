import React from "react";
import "../../css/Student/Future/Future.css";

function Future() {
  return (
    <>
      <div className="wrapper-f" id="future">
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
        <div className="content-f">
          <h1>Areas of interest</h1>
          <div className="sections-f">
            <div className="computer-science">
              <h3>Computer Science</h3>
              <div>
                <span className="Robotics">Robotics</span>
                <span className="IA"> AI </span>
                <span className="IOT">IOT</span>
              </div>
            </div>
            <div className="entrepreneurship">
              <h3>Entrepreneurship</h3>
            </div>
            <div className="business">
              <h3>Business</h3>
              <span className="trading">Trading</span>
              <span className="investing"> Investing </span>
              <span className="economics">Economics</span>
            </div>
          </div>
          <div className="career">
            <h2>Career</h2>
            <p>
              I am seeking to study a career in both computer science and
              business, to learn how to develop tech solutions and make ventures
              from them.
            </p>
          </div>
          <div className="goals">
            <h2>Goals</h2>
            <p>
              My goal is to become a tech entrepreneur, developing an idea into
              a startup and then into a consolidated business that goes beyond
              the original product.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Future;
