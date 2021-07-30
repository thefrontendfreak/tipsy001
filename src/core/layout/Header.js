import React , { useState, useEffect } from 'react'
import Logo from '../assets/media/logo.svg'
import Line from '../assets/media/header-line.svg'
import { NavLink } from 'react-router-dom';
import * as Scroll from 'react-scroll';
let Link = Scroll.Link;

const Header = () => {
    const [mobileMenuStatus, setmobileMenuStatus] = useState(false);

    const mobileMenuHandler = () => {
        setmobileMenuStatus(!mobileMenuStatus);
    }
    return (
        <div className="header">
            <div className="header__wrapper d__flex jc__between">
                <div className="header__left">
                    <div className="header__left--logo">
                        <NavLink to="/" exact={true}>
                            <img src={Logo} alt="" />
                        </NavLink>
                    </div>
                    <div className="header__left--lineBg">
                        <img src={Line} alt="" />
                    </div>
                </div>
                <div className={"header__mobileBtn d__none " + (mobileMenuStatus ? "active" : "")} onClick={mobileMenuHandler}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className={"header__mobileBackdrop " + (mobileMenuStatus ? "active" : "")} onClick={mobileMenuHandler}></div>
                <div className={"header__right d__flex ai__center " + (mobileMenuStatus ? "showMenu" : "")}>
                    <ul className="header__navMenu d__flex">
                        <li className="header__navMenu--item"  onClick={mobileMenuHandler}>
                            <NavLink to="/howtobuy">
                                <span>How to</span>
                            </NavLink>
                        </li>
                        <li className="header__navMenu--item">
                            <span onClick={mobileMenuHandler}>Whitepaper</span>
                        </li>
                        <li className="header__navMenu--item hasDropdown">
                            <span>Discover</span>
                            <span className="icon">
                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L0.803847 2.51244e-08L11.1962 -8.834e-07L6 9Z" fill="url(#paint0_linear)" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="6" y1="9" x2="6" y2="-3" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FF50B7" />
                                            <stop offset="1" stopColor="#DE0C88" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                            <ul className="dropdown">
                                <li className="dropdown__item" onClick={mobileMenuHandler}>
                                    <Link activeClass="active"
                                        to="social_currency" spy={true}
                                        smooth={true}
                                        offset={-50}
                                        activeClass="active"
                                        duration={700}
                                        delay={0}>
                                        <span>
                                            Social Currency
                                        </span>
                                    </Link>
                                </li>
                                <li className="dropdown__item" onClick={mobileMenuHandler}>
                                    <Link activeClass="active"
                                        to="use_case" spy={true}
                                        smooth={true}
                                        offset={-50}
                                        activeClass="active"
                                        duration={700}
                                        delay={0}>
                                        <span>
                                            Use cases
                                        </span>
                                    </Link>
                                </li>
                                <li className="dropdown__item" onClick={mobileMenuHandler}>
                                    <Link activeClass="active"
                                        to="tokenomics" spy={true}
                                        smooth={true}
                                        offset={-50}
                                        activeClass="active"
                                        duration={700}
                                        delay={0}>
                                        <span>
                                            Tokenomics
                                        </span>
                                    </Link>
                                </li>
                                <li className="dropdown__item" onClick={mobileMenuHandler}>
                                    <Link activeClass="active"
                                        to="get_social" spy={true}
                                        smooth={true}
                                        offset={-50}
                                        activeClass="active"
                                        duration={700}
                                        delay={0}>
                                        <span>
                                            Get social
                                        </span>
                                    </Link>
                                </li>
                                <li className="dropdown__item" onClick={mobileMenuHandler}>
                                    <Link activeClass="active"
                                        to="roadmap" spy={true}
                                        smooth={true}
                                        offset={-50}
                                        activeClass="active"
                                        duration={700}
                                        delay={0}>
                                        <span>
                                            Roadmap
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="header__right--cta">
                        <button className="btn__conntent">
                            Connect
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
