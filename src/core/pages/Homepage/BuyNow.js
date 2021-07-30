import React from 'react'
import ButtonIcon from '../../assets/media/pancakeswap-cake.svg'
import TopLine from '../../assets/media/buy-banner-top-line.svg'
import rightShape from '../../assets/media/right-pink-shape.svg'
import leftShape from '../../assets/media/left-blue-shape.svg'
import midLine from '../../assets/media/pink-line.svg'
import Fade from 'react-reveal/Fade';

const BuyNow = () => {
    return (
        <div className="buyNowBlock boxContent p__relative">
            <div className="boxContent__rightBg rightShape">
                <img src={rightShape} alt="" />
            </div>
            <div className="boxContent__rightBg midLine">
                <img src={midLine} alt="" />
            </div>
            <div className="boxContent__rightBg leftShape">
                <img src={leftShape} alt="" />
            </div>
            <div className="boxContent__leftBg leftThumb"></div>
            <div className="boxContent__wrapper">
                <div className="boxContent__button">
                    <button>
                        <span className="text">
                            Buy Now
                        </span>
                        <span className="icon">
                            <img src={ButtonIcon} alt="" />
                        </span>
                    </button>
                    <span className="topLine">
                        <img src={TopLine} alt="" />
                    </span>
                </div>
                <Fade big>
                    <div className="boxContent__block t__center">
                        <h4>
                            TIPSY.FI - DECENTRALIZED ENGAGEMENT MACHINE
                        </h4>
                        <p>
                            TIPSY is the utility token designed to help brands, influencers and their communities revolutionize the social media promotion model
                        </p>
                        <h3 className="title">
                            TIPSY IS HERE FOR YOU
                        </h3>
                        <div className="boxContent__block--glowingBall"></div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default BuyNow
