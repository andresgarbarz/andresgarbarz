import React from 'react'
import '../../css/LandingPage/Home.css'
import Link from 'react-scroll/modules/components/Link'

function Home() {
    return (
        <>
        <div className='bg'>
            <h1 className='title'>I am Andrés Matías Garbarz</h1>
            <Link className='btn' to='sections' smooth={true} duration={1000} delay={100}>Learn More</Link>
            {/* <button className='btn'>Scroll Down</button> */}
        </div>
        </>
    )
}

export default Home
