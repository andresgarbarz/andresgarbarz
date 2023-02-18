import React from 'react'
import Home from '../Content/LandingPage/Home'
import Sections from '../Content/LandingPage/Sections'
import Swal from 'sweetalert2'

function Landing() {
    window.onload = () => {Swal.fire({titleText: "Andrés Garbarz says", text: "This website is being migrated to next.js for SEO and optimization purposes, therefore there is no visible progress. However, you can still navigate since most sections are almost complete.", icon: "info", confirmButtonText: "Got it!", confirmButtonColor: "#4EABFF"})}
    return (
        <>
            <Home></Home>
            <Sections></Sections>
        </>
    )
}

export default Landing