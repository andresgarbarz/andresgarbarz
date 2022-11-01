import React from 'react'
import "../css/Musician/musician.css"
/* import piano from "../assets/musician/piano.jpg"; */

function MusicianHome() {
    return (
        <>
            <div className='wrapper-m'>
                <div className='header-m'>
                    <img src={piano} alt="" />
                </div>
                <div className='row1'>
                    <div className='item1'>
                        <h5>Self learnt pianist</h5>
                    </div>
                </div>
                <div className='row2'>
                    <div className='item2'>
                        <h5>Founder & leader of a band</h5>
                    </div>
                </div>
                <div className='row3'>
                    <div className='item3'>
                        <h5>Played in official school acts</h5>
                    </div>
                </div>
                <div className='row4'>
                    <div className='item4'>
                        <h5>Alternative & national rock, pop</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicianHome