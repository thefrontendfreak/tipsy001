import React from 'react'
import * as Scroll from 'react-scroll';
import TelegramIcon from '../assets/media/telegram.svg'
import DiscordIcon from '../assets/media/discord.svg'
import TwitterIcon from '../assets/media/twitter.svg'
import RedditIcon from '../assets/media/reddit.svg'
import GithubIcon from '../assets/media/github.svg'
import fooBanner from '../assets/media/footer-banner.png'

let scroll = Scroll.animateScroll;


const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    return (
        <div className="footer">
            {/* <div className="footer__bg">
                <img src={fooBanner} alt="" />
            </div> */}
            <div className="footer__wrapper">
                <div className="footer__heading t__center">
                    <h1 className="title">
                        GET IN TOUCH
                    </h1>
                </div>
                <ul className="footer__socialLink d__flex">
                    <li className="footer__socialLink--item">
                        <button>
                            <div className="socialIcon">
                                <img src={TelegramIcon} alt="" />
                            </div>
                            <div className="platformName">
                                <span>
                                    Telegram
                                </span>
                            </div>
                        </button>
                    </li>
                    <li className="footer__socialLink--item">
                        <button>
                            <div className="socialIcon">
                                <img src={DiscordIcon} alt="" />
                            </div>
                            <div className="platformName">
                                <span>
                                    Discord
                                </span>
                            </div>
                        </button>
                    </li>
                    <li className="footer__socialLink--item">
                        <button>
                            <div className="socialIcon">
                                <img src={TwitterIcon} alt="" />
                            </div>
                            <div className="platformName">
                                <span>
                                    Twitter
                                </span>
                            </div>
                        </button>
                    </li>
                    <li className="footer__socialLink--item">
                        <button>
                            <div className="socialIcon">
                                <img src={RedditIcon} alt="" />
                            </div>
                            <div className="platformName">
                                <span>
                                    Reddit
                                </span>
                            </div>
                        </button>
                    </li>
                    <li className="footer__socialLink--item">
                        <button>
                            <div className="socialIcon">
                                <img src={GithubIcon} alt="" />
                            </div>
                            <div className="platformName">
                                <span>
                                    Github
                                </span>
                            </div>
                        </button>
                    </li>
                </ul>
                <div className="footer__bottom d__flex jc__between">
                    <div className="footer__bottom--scrollTopBtn" onClick={scrollToTop}>
                        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.134 28.75C36.5189 28.0833 37.4811 28.0833 37.866 28.75L44.5777 40.375C44.9626 41.0417 44.4815 41.875 43.7117 41.875L30.2883 41.875C29.5185 41.875 29.0374 41.0417 29.4223 40.375L36.134 28.75Z" fill="#fff" />
                            <g filter="url(#filter0_f)">
                                <path d="M36.134 28.75C36.5189 28.0833 37.4811 28.0833 37.866 28.75L44.5777 40.375C44.9626 41.0417 44.4815 41.875 43.7117 41.875L30.2883 41.875C29.5185 41.875 29.0374 41.0417 29.4223 40.375L36.134 28.75Z" fill="url(#paint1_linear)" />
                            </g>
                            <circle cx="37" cy="37" r="24" stroke="url(#paint2_linear)" strokeWidth="4" />
                            <g filter="#fff">
                                <circle cx="37" cy="37" r="24" stroke="white" strokeWidth="4" />
                            </g>
                        </svg>
                    </div>
                    <p>
                        Copyright © 2021 Tipsy. All rights reserved.

                    </p>
                    <ul className="bottomMenu d__flex">
                        <li>
                            <button>Privacy Policy</button>
                        </li>
                        <li>
                            <button>Terms of use</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
