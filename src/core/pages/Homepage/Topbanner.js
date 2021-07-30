import React, { useEffect, useState } from 'react'
import '@lottiefiles/lottie-player';
import Picon from '../../assets/media/powerdby-icon.svg'
import AnimBg from '../../assets/media/animbg.png'
import ButtonBg from '../../assets/media/button-bg.png'


const Topbanner = () => {
    // Countdown
    const [countdownDate, setCountdownDate] = useState(new Date('8/5/2021').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate = countdownDate - currentTime;

            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            setState({ days: days, hours: hours, minutes, seconds });
        }
    };

    return (
        <div className="topBanner">
            <div className="topBanner__top t__center">
                <div className="topBanner__animBg">
                    <img src={AnimBg} alt="" />
                    <lottie-player
                        autoplay
                        resizeMode='cover'
                        loop
                        mode='normal'
                        src='https://assets10.lottiefiles.com/packages/lf20_divyshav.json'
                        style={{
                            width: 250,
                        }}
                    ></lottie-player>
                    <span className="pie">
                        <svg width="486" height="486" viewBox="0 0 486 486" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M419.518 300.665C451.285 203.193 397.839 98.3664 300.143 66.5261C202.447 34.6859 97.4974 87.8897 65.7303 185.361C38.5956 268.618 73.6336 357.243 145.315 401.163C157.553 408.661 170.858 414.856 185.105 419.5C282.8 451.34 387.75 398.136 419.518 300.665Z" stroke="url(#paint0_linear)" strokeWidth="13" strokeMiterlimit="10" strokeLinecap="round" />
                            <path d="M300.179 66.5379C202.484 34.6976 97.5336 87.9014 65.7665 185.372C38.6319 268.63 73.6698 357.255 145.352 401.175C157.589 408.673 170.894 414.868 185.141 419.511" stroke="url(#paint1_linear)" strokeWidth="13" strokeMiterlimit="10" strokeLinecap="round" />
                            <g filter="url(#filter0_f)">
                                <path d="M191 418.6C207.222 423.208 224.348 425.675 242.051 425.675C344.805 425.675 428.103 342.568 428.103 240.051C428.103 159.39 376.536 90.746 304.5 65.1426" stroke="url(#paint2_linear)" strokeWidth="13" strokeMiterlimit="10" />
                            </g>
                            <defs>
                                <filter id="filter0_f" x="158.224" y="28.0181" width="307.379" height="435.157" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="15.5" result="effect1_foregroundBlur" />
                                </filter>
                                <linearGradient id="paint0_linear" x1="188.882" y1="420.33" x2="305.128" y2="63.6539" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.315972" stopColor="#DE0C88" />
                                    <stop offset="1" stopColor="#00E1E1" />
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="188.919" y1="420.342" x2="127.087" y2="92.4224" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.315972" stopColor="#646464" />
                                    <stop offset="0.962981" stopColor="#353535" />
                                </linearGradient>
                                <linearGradient id="paint2_linear" x1="245.901" y1="425.292" x2="245.901" y2="50.1505" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.315972" stopColor="#DE0C88" />
                                    <stop offset="1" stopColor="#00E1E1" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                </div>
                <div className="topBanner__poweredBy">
                    <p className="d__flex ai__center jc__center">
                        <span>Powered by</span>
                        <span className="icon pl__10">
                            <img src={Picon} alt="" />
                        </span>
                    </p>
                </div>
            </div>
            <div className="topBanner__countdown">
                <div className="topBanner__countdown--wrapper d__flex jc__center">
                    <div className="topBanner__countdown--block t__center day">
                        <span className="dayNumber number d__block">
                            {state.days || '0'}
                        </span>
                        <span className="ctitle d__block">Days</span>
                    </div>
                    <div className="topBanner__countdown--block t__center hour">
                        <span className="dayNumber number d__block">
                            {state.hours || '0'}
                        </span>
                        <span className="ctitle d__block">Hours</span>
                    </div>
                    <div className="topBanner__countdown--block t__center minute">
                        <span className="dayNumber number d__block">
                            {state.minutes || '0'}
                        </span>
                        <span className="ctitle d__block">Minute</span>
                    </div>
                    <div className="topBanner__countdown--block t__center second">
                        <span className="dayNumber number d__block">
                            {state.seconds || '0'}
                        </span>
                        <span className="ctitle d__block">Seconds</span>
                    </div>
                </div>
            </div>
            <div className="topBanner__newsLatter">
                <form action="" className="topBanner__newsLatter--form d__flex">
                    <input className="nInput" type="email" placeholder="Enter your email" />
                    <button className="nButton">
                        <span className="buttonBg">
                            <img src={ButtonBg} alt="" />
                        </span>
                        <span className="text">
                            Subscribe
                        </span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Topbanner
