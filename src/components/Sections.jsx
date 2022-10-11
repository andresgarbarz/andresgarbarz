import React from 'react'
import '../css/Sections.css'

function Sections() {
    return (
        <>
        <div className='container'>
            <div className='section' id='student'>
                <div className='txtbox' id='stxtbox'>
                    <h1 className='stxt'>Student</h1>
                </div>
                <img src="./src/assets/home/student.jpg" alt=""/>
            </div>
            <div className='section' id='athlete'>
                <div className='txtbox' id='atxtbox'>
                    <h1 className='stxt'>Athlete</h1>
                </div>
                <img src="./src/assets/home/athlete.jpg" alt=""/>
            </div>
            <div className='section' id='developer'>
                <div className='txtbox' id='dtxtbox'>
                    <h1 className='stxt'>Developer</h1>
                </div>
                <img src="./src/assets/home/developer.jpg" alt=""/>
            </div>
            <div className='section' id='musician'>
                <div className='txtbox' id='mtxtbox'>
                    <h1 className='stxt'>Musician</h1>
                </div>
                <img src="./src/assets/home/musician.jpg" alt=""/>
            </div>
            <div className='section' id='musician'></div>
            <div className='extra' id='andmore'>
                <img src="./src/assets/home/extra.jpg" alt=""/>
            </div>
        </div>
        </>
    )
}

export default Sections