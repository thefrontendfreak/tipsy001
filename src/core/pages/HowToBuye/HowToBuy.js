import React, { useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import Logo from '../../assets/media/logo.svg'
import BottomLine from '../../assets/media/stat-bottom-line.svg'
import BoxMirror from '../../assets/media/boxMirror.svg'
import Thumbcenter from '../../assets/media/chr-center.svg'

const HowToBuy = () => {
    const [isCopied, setIsCopied] = useState(false);

    const codeSnippet = `
    0x7Abf7f54F30a45c7c43D728A75d6741440d7c591
  `;
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    return (
        <div className="howTobuy">
            <div className="howTobuy__wrapper">
                <div className="howTobuy__heading mb__20 t__center">
                    <h1 className="title">
                        HOW TO BUY
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet
                    </p>
                </div>
                <div className="howTobuy__logoleft">
                    <img src={Logo} alt="" />
                </div>
                <div className="howTobuy__logoright">
                    <img src={Logo} alt="" />
                </div>
                <div className="howTobuy__infoBox">
                    <ul className="howTobuy__infoList">
                        <li className="howTobuy__infoList--item d__flex">
                            <span className="infoNumber">1</span>
                            <span className="infoText">
                                Download the app, Trust Wallet (iOS & Android)
                            </span>
                        </li>
                        <li className="howTobuy__infoList--item d__flex">
                            <span className="infoNumber">2</span>
                            <span className="infoText">
                                Purchase BNB or BSC
                            </span>
                        </li>
                        <li className="howTobuy__infoList--item d__flex">
                            <span className="infoNumber">3</span>
                            <span className="infoText">
                                Go to the DApps tab at the bottom, and find PancakeSwap.
                                iPhone users may need to enable the trust browser, then
                                browser tab. You can also click the Buy Now button on our
                                website if you’re not on mobile.
                            </span>
                        </li>
                        <li className="howTobuy__infoList--item d__flex">
                            <span className="infoNumber">4</span>
                            <span className="infoText">
                                Click ”Select a currency” and enter this contract
                                address into the search field, and you should be able to find SPERM.
                                <span className="d__block copy">
                                    {codeSnippet}
                                    <CopyToClipboard text={codeSnippet} onCopy={onCopyText}>
                                        <span className="icon">
                                            <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.68116 4C9.01811 4 8.38223 4.26339 7.91339 4.73223C7.44454 5.20108 7.18115 5.83696 7.18115 6.5V19C7.18115 19.6631 7.44454 20.299 7.91339 20.7678C8.38223 21.2366 9.01811 21.5 9.68116 21.5H17.1812C17.8442 21.5 18.4801 21.2366 18.9489 20.7678C19.4178 20.299 19.6812 19.6631 19.6812 19V6.5C19.6812 5.83696 19.4178 5.20108 18.9489 4.73223C18.4801 4.26339 17.8442 4 17.1812 4H9.68116ZM8.43115 6.5C8.43115 6.16848 8.56285 5.85054 8.79727 5.61612C9.03169 5.3817 9.34964 5.25 9.68116 5.25H17.1812C17.5127 5.25 17.8306 5.3817 18.0651 5.61612C18.2995 5.85054 18.4312 6.16848 18.4312 6.5V19C18.4312 19.3315 18.2995 19.6495 18.0651 19.8839C17.8306 20.1183 17.5127 20.25 17.1812 20.25H9.68116C9.34964 20.25 9.03169 20.1183 8.79727 19.8839C8.56285 19.6495 8.43115 19.3315 8.43115 19V6.5Z" fill="#00E1E1" />
                                                <path d="M4.68188 8.99996C4.6819 8.56113 4.79742 8.13003 5.01684 7.75C5.23626 7.36996 5.55185 7.05438 5.93189 6.83496V19.625C5.93189 20.4538 6.26113 21.2486 6.84718 21.8347C7.43323 22.4207 8.22809 22.75 9.05689 22.75H16.8469C16.6275 23.13 16.3119 23.4456 15.9319 23.665C15.5518 23.8845 15.1207 24 14.6819 24H9.05689C7.89657 24 6.78377 23.539 5.96329 22.7186C5.14282 21.8981 4.68188 20.7853 4.68188 19.625V8.99996Z" fill="#00E1E1" />
                                                <g filter="url(#filter0_f)">
                                                    <path d="M8.99927 4C8.33623 4 7.70034 4.26339 7.2315 4.73223C6.76266 5.20108 6.49927 5.83696 6.49927 6.5V19C6.49927 19.6631 6.76266 20.299 7.2315 20.7678C7.70034 21.2366 8.33623 21.5 8.99927 21.5H16.4993C17.1623 21.5 17.7982 21.2366 18.2671 20.7678C18.7359 20.299 18.9993 19.6631 18.9993 19V6.5C18.9993 5.83696 18.7359 5.20108 18.2671 4.73223C17.7982 4.26339 17.1623 4 16.4993 4H8.99927ZM7.74927 6.5C7.74927 6.16848 7.88097 5.85054 8.11539 5.61612C8.34981 5.3817 8.66775 5.25 8.99927 5.25H16.4993C16.8308 5.25 17.1487 5.3817 17.3832 5.61612C17.6176 5.85054 17.7493 6.16848 17.7493 6.5V19C17.7493 19.3315 17.6176 19.6495 17.3832 19.8839C17.1487 20.1183 16.8308 20.25 16.4993 20.25H8.99927C8.66775 20.25 8.34981 20.1183 8.11539 19.8839C7.88097 19.6495 7.74927 19.3315 7.74927 19V6.5Z" fill="#00E1E1" />
                                                    <path d="M4 8.99996C4.00001 8.56113 4.11553 8.13003 4.33495 7.75C4.55437 7.36996 4.86996 7.05438 5.25 6.83496V19.625C5.25 20.4538 5.57924 21.2486 6.1653 21.8347C6.75135 22.4207 7.5462 22.75 8.37501 22.75H16.165C15.9456 23.13 15.63 23.4456 15.25 23.665C14.8699 23.8845 14.4388 24 14 24H8.37501C7.21468 24 6.10188 23.539 5.28141 22.7186C4.46094 21.8981 4 20.7853 4 19.625V8.99996Z" fill="#00E1E1" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_f" x="0" y="0" width="22.9993" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </span>
                                    </CopyToClipboard>
                                </span>
                            </span>
                        </li>
                        <li className="howTobuy__infoList--item d__flex">
                            <span className="infoNumber">5</span>
                            <span className="infoText">
                                Before swapping, click on the cog wheel and set the slippage to between 11-12%.
                            </span>
                        </li>
                        <li className="howTobuy__infoList--item d__flex">
                            <span className="infoNumber">6</span>
                            <span className="infoText">
                                Now, set the amount you want to purchase and press the swap button.
                            </span>
                        </li>
                        <li className="howTobuy__infoList--item d__flex">
                            <span className="infoNumber">7</span>
                            <span className="infoText">
                                Confirm the transaction and...
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="howTobuy__bottomLine">
                <img src={BottomLine} alt="" />
            </div>
            <div className="howTobuy__boxMirror">
                <img src={BoxMirror} alt="" />
            </div>
            <div className="howTobuy__overlay">
                <div className="howTobuy__overlay--img">
                    <img src={Thumbcenter} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HowToBuy
