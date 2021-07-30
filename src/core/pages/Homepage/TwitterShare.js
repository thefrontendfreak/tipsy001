import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterShare = (props) => {
    const { title, hashtags, via } = props;
    const data = {
        text: title,
        hashtags: hashtags?.length > 0 ? hashtags.join(',') : undefined,
        via: via,
    };
    const url =
        'https://twitter.com/intent/tweet?' + new URLSearchParams(data).toString();
    return (
        <div className="twitterShare">
            <div className="twitterShare__wrapper d__flex jc__between">
                <div className="twitterShare__twitterBox">
                    <TwitterTimelineEmbed
                        sourceType='profile'
                        screenName='elonsperm'
                        options={{ height: 560, width: '100%' }}
                    />
                </div>
                <div className="twitterShare__content">
                    <h3 className="title">
                        TIPSY PLATFORM
                    </h3>
                    <div className="twitterShare__content--text">
                        <p>
                            Let’s get social on Twitter. <br /> <br />
                            Follow-up on Twitter and see the current airdrops campaigns.
                        </p>
                    </div>
                    <button>
                        <a href={url} target='_blank'>
                            Share
                        </a>
                        <span className="icon">
                            <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.133 5.97432C25.1452 6.23436 25.1498 6.4976 25.1498 6.75763C25.1498 14.7673 19.3717 24 8.8063 24C5.56043 24 2.54283 22.9968 0 21.2761C1.50405 21.4679 3.0292 21.3453 4.48827 20.915C5.94735 20.4848 7.31175 19.7556 8.50348 18.7689C7.30498 18.745 6.14352 18.3266 5.18149 17.5723C4.21945 16.818 3.50493 15.7654 3.13783 14.5618C3.99922 14.7317 4.88576 14.6961 5.73239 14.4575C4.43224 14.1794 3.26322 13.4357 2.42344 12.3524C1.58366 11.2692 1.12478 9.91297 1.12457 8.51365V8.43821C1.92226 8.90627 2.8144 9.16656 3.72674 9.19744C2.50915 8.34123 1.64725 7.02716 1.31694 5.52345C0.986629 4.01973 1.21282 2.43974 1.94935 1.10595C3.39164 2.97827 5.19119 4.50964 7.23112 5.60057C9.27104 6.69151 11.5057 7.31761 13.79 7.43821C13.6912 6.98495 13.6417 6.52128 13.6424 6.05619C13.6424 5.26074 13.7909 4.47309 14.0796 3.73822C14.3682 3.00334 14.7913 2.33564 15.3246 1.77325C15.8579 1.21086 16.491 0.764803 17.1878 0.460546C17.8846 0.156289 18.6313 -0.000202777 19.3854 8.04793e-06C20.1713 -0.00134389 20.9492 0.167648 21.6706 0.496502C22.392 0.825355 23.0417 1.30706 23.5793 1.91172C24.8654 1.64318 26.0989 1.146 27.227 0.441421C26.7979 1.84464 25.9002 3.03567 24.7009 3.79294C25.8395 3.65056 26.9516 3.32918 28 2.83949C27.2298 4.05689 26.2587 5.11865 25.133 5.97432Z" fill="url(#paint0_linear)" />
                                <defs>
                                    <linearGradient id="paint0_linear" x1="1.75998e-06" y1="-6.51429" x2="26.6062" y2="19.9075" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.237847" stopColor="#00E1E1" />
                                        <stop offset="0.925347" stopColor="#76ECEC" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TwitterShare
