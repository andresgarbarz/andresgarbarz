import React from 'react'
import "../../css/Developer/DevAboutMe/DevAboutMe.css"
import andydev from "../../assets/developer/devface.png"

function DevAboutMe() {
    return (
        <>
            <div className='wrapper-da' id='wrapper-da'>
                {/* <h1 style={{ color: "white" }}>Page in progress</h1> */}
                <div className='da-column1'>
                    <h2>ABOUT ME</h2>
                    <div className='da-text'>
                        <p>I am Andrés Matías Garbarz, 17 years old and I've been coding for 3+ years. Since I've written my very first lines of code, I've tried my hand at applying what I'm capable of towards fulfilling some necessity. These past years I have coded video games, <strong>websites</strong> and <strong>apps</strong>. <br /> Academically, I am a senior year student at the ICT track in ORT High School. <br /> I am currently looking for my first <strong>full-stack</strong> / <strong>backend</strong> development job.</p>
                    </div>
                </div>
                <div className='da-column2'>
                    <img src={andydev} className="devface"  alt="" />
                </div>
            </div>
        </>
    )
}

export default DevAboutMe