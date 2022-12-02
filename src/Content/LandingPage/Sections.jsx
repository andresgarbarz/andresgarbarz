import React from 'react'
import '../../css/LandingPage/sections.css'
import student from '../../assets/home/student.jpg'
import athlete from '../../assets/home/athlete.jpg'
import developer from '../../assets/home/developer.jpg'
import musician from '../../assets/home/musician.jpg'
import extra from '../../assets/home/extra.jpg'
import { Link } from 'react-router-dom'

function Sections() {
    return (
        <>
            <div className="container-container">
                <div className='container' id='sections'>
                    <div className='section' id='student'>
                        <div className='txtbox' id='stxtbox'>
                            <h1 className='stxt'>Student</h1>
                        </div>
                        <Link to={"/student"}>
                            <img src={student} alt="student"/>
                        </Link>
                    </div>
                    <div className='section' id='athlete'>
                        <div className='txtbox' id='atxtbox'>
                            <h1 className='stxt'>Athlete</h1>
                        </div>
                        <Link to={"/athlete"}>
                            <img src={athlete} alt="athlete" />
                        </Link>
                    </div>
                    <div className='section' id='developer'>
                        <div className='txtbox' id='dtxtbox'>
                            <h1 className='stxt'>Developer</h1>
                        </div>
                        <Link to={"/developer"}>
                            <img src={developer} alt="developer" />
                        </Link>
                    </div>
                    <div className='section' id='musician'>
                        <div className='txtbox' id='mtxtbox'>
                            <h1 className='stxt'>Musician</h1>
                        </div>
                        <Link to={"/musician"}>
                            <img src={musician} alt="musician" />
                        </Link>
                    </div>
                </div>
                <div className='extra' id='andmore'>
                    <img src={extra} alt="" />
                </div>
            </div>
        </>
    )
}

export default Sections