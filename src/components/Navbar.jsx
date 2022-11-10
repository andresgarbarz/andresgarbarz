import React, {useState} from 'react'
import '../css/Navbar.css'

function Navbar({title}) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    let path;
    isNavExpanded ? path = "M4.53461 34.95L2 32.4154L15.9404 18.475L2 4.53461L4.53461 2L18.475 15.9404L32.4154 2L34.95 4.53461L21.0096 18.475L34.95 32.4154L32.4154 34.95L18.475 21.0096L4.53461 34.95Z" : path = "M1 36V31.625H47V36H1ZM1 20.6875V16.3125H47V20.6875H1ZM1 5.375V1H47V5.375H1Z"; 
    return (
        <>
            <nav className="navbar">
                <a href="/" className="name">{title}</a>
                <button className="list" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
                <svg width={48*5/9} height={37*5/9} viewBox="0 0 48 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d={path} fill="#4EABFF" stroke="#4EABFF" stroke-width="2"/></svg>
                </button>
                <div className={isNavExpanded ? "nav-menu" : "nav-menu expanded"}>
                    <ul>
                        <li>
                            <a href="#about">ABOUT ME</a>
                        </li>
                        <li>
                            <a href="#achievements">ACHIEVEMENTS</a>
                        </li>
                        <li>
                            <a href="#future">FUTURE</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar