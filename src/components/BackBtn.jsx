import React from 'react'
import { Link } from 'react-router-dom'
import '../css/BackBtn/BackBtn.css'

function BackBtn() {

    return (
        <>
            <Link to={"/"}
                
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
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.9004 0.564866C15.6554 1.31802 15.6554 2.53912 14.9004 3.29228L6.60081 11.5714H27.0667C28.1344 11.5714 29 12.4349 29 13.5C29 14.5651 28.1344 15.4286 27.0667 15.4286H6.60081L14.9004 23.7077C15.6554 24.4609 15.6554 25.682 14.9004 26.4351C14.1454 27.1883 12.9213 27.1883 12.1663 26.4351L0.56626 14.8637C-0.188753 14.1106 -0.188753 12.8894 0.56626 12.1363L12.1663 0.564866C12.9213 -0.188289 14.1454 -0.188289 14.9004 0.564866Z"
                            fill="#4EABFF"
                        />
                    </svg>
                    <span>Back</span>
                </div>
            </Link>{" "}
        </>
    )
}

export default BackBtn