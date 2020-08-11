import React, { useState } from 'react'
import {Link} from 'gatsby'
import MainLogo from '../assets/images/logo/main_logo.png';


const Nav = () =>{
    
    const [ toggled,  toggle ] = useState(false);

    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container">

                <Link className="navbar-brand" to="index.html"></Link>

                <button onClick={()=>toggle(toggled => !toggled)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={` ${!toggled ? 'collapse' : ''} navbar-collapse`} id="navbarNav">

                    <div className="logo-container">
                        <Link to="/"><img src={MainLogo} /></Link>
                    </div>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link smoothScroll">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-the-book" className="nav-link">About The Book</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-the-author" className="nav-link smoothScroll">About The Author</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;