import React from 'react'
import '../css/Sections.css'

function Sections() {
    return (
        <>
        <div className='container'>
            <div className='section' id='student'>
                <img src="./src/assets/home/student.jpg" alt=""/>
            </div>
            <div className='section' id='athlete'>
                <img src="./src/assets/home/athlete.jpg" alt=""/>
            </div>
            <div className='section' id='developer'></div>
            <div className='section' id='musician'></div>
            <div className='extra' id='andmore'></div>
        </div>
        </>
    )
}

export default Sections