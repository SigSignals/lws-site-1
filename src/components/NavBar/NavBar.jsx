import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="site-main-menu">
            <ul>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/home-one"}><span className="menu-text">Home</span></NavLink>
                </li>
                {/* <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">Homepage</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-one"}><span className="menu-text">Home One</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-two"}><span className="menu-text">Home Two</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-three"}><span className="menu-text">Home Three</span></NavLink></li>
                    </ul>
                </li> */}
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text">About Us</span></NavLink>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Services</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/training"}><span className="menu-text">Training</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/research"}><span className="menu-text">Research</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/governance"}><span className="menu-text">Governance</span></NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/contact"}><span className="menu-text">Contact</span></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
