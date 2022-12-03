import React from 'react'
import "../../css/Developer/DevHome/DevHome.css"
import { Link } from 'react-scroll'

function DeveloperHome() {
    return (
        <>
            <div className='wrapper-dh'>
                {/* <h1 style={{ color: "white" }}>Page in progress</h1> */}
                <div className='title-info'>
                    <h1 className='d-title'>I am <span className='d-name'>Andrés Matías Garbarz</span></h1>
                    <p className='d-role'>Full stack Developer</p>
                    <Link className='d-btn' to='wrapper-da' smooth={true} duration={1000} delay={100}>
                        View my Work
                        <svg width="12" height="17" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.48542 21.2748V1.72471M15.5565 13.1289L8.48542 21.2748L1.41435 13.1289" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default DeveloperHome