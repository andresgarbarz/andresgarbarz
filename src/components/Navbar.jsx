import React, {useState} from 'react'
import '../css/Navbar.css'

function Navbar({title}) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
    return (
        <>
            <nav className="navbar">
                <a href="/" className="name">{title}</a>
                <button className="list" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
                <svg width={48*5/9} height={37*5/9} viewBox="0 0 48 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 36V31.625H47V36H1ZM1 20.6875V16.3125H47V20.6875H1ZM1 5.375V1H47V5.375H1Z" fill="#4EABFF" stroke="#4EABFF" stroke-width="2"/></svg>
                </button>
                <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
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