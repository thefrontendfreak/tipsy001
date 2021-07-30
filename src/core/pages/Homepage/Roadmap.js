import React from 'react'
import Fade from 'react-reveal/Fade';
import IconBlue from '../../assets/media/blue-capsul.svg'
import IconPink from '../../assets/media/pink-capsul.svg'
import Line from '../../assets/media/roadmap-line.svg'
import LeftSeparator from '../../assets/media/left-phase-line.svg'
import RightSeparator from '../../assets/media/right-phase-line.svg'
import rightShape from '../../assets/media/right-pink-shape.svg'
import leftShape from '../../assets/media/left-blue-shape.svg'
import midLine from '../../assets/media/pink-line.svg'
import leftLine from '../../assets/media/roadmap-left-line.svg'
import rightLine from '../../assets/media/roadmap-right-line.svg'

const Roadmap = () => {
    return (
        <div className="roadmap">
            <div className="roadmap__leftLine">
                <img src={leftLine} alt="" />
            </div>
            <div className="roadmap__rightLine">
                <img src={rightLine} alt="" />
            </div>
            <div className="roadmap__wrapper">
                <div className="roadmap__line">
                    <img src={Line} alt="" />
                </div>
                <div className="roadmap__heading t__center">
                    <h1 className="title">
                        ROADMAP
                    </h1>
                    <p>
                        See what is coming next
                    </p>
                </div>
                <div className="roadmap__phaseRow d__flex wrap">
                    <Fade big>
                        <div className="roadmap__phase phaseLeft">
                            <div className="phaseNumber">
                                PHASE #1
                            </div>
                            <div className="phaseSparator">
                                <img src={LeftSeparator} alt="" />
                            </div>
                            <div className="phaseText">
                                <p>
                                    Smart Contract launch on Binance Smart Chain
                                </p>
                            </div>
                            <div className="iconBlue">
                                <img src={IconBlue} alt="" />
                            </div>
                            <div className="iconPink">
                                <img src={IconPink} alt="" />
                            </div>
                        </div>
                    </Fade>
                    <Fade big delay={200}>
                        <div className="roadmap__phase phaseRight">
                            <div className="phaseNumber">
                                PHASE #2
                            </div>
                            <div className="phaseSparator">
                                <img src={RightSeparator} alt="" />
                            </div>
                            <div className="phaseText">
                                <p>
                                    Tipsy integration with Twitter
                                </p>
                            </div>
                            <div className="iconBlue">
                                <img src={IconBlue} alt="" />
                            </div>
                            <div className="iconPink">
                                <img src={IconPink} alt="" />
                            </div>
                        </div>
                    </Fade>
                    <Fade big delay={400}>
                        <div className="roadmap__phase phaseLeft">
                            <div className="phaseNumber">
                                PHASE #3
                            </div>
                            <div className="phaseSparator">
                                <img src={LeftSeparator} alt="" />
                            </div>
                            <div className="phaseText">
                                <p>
                                    Integration with TikTok, Instagram and Reddit
                                </p>
                            </div>
                            <div className="iconBlue">
                                <img src={IconBlue} alt="" />
                            </div>
                            <div className="iconPink">
                                <img src={IconPink} alt="" />
                            </div>
                        </div>
                    </Fade>
                    <Fade big delay={600}>
                        <div className="roadmap__phase phaseRight">
                            <div className="phaseNumber">
                                PHASE #4
                            </div>
                            <div className="phaseSparator">
                                <img src={RightSeparator} alt="" />
                            </div>
                            <div className="phaseText">
                                <p>
                                    Launch Tipsy influncer marketing platform
                                </p>
                            </div>
                            <div className="iconBlue">
                                <img src={IconBlue} alt="" />
                            </div>
                            <div className="iconPink">
                                <img src={IconPink} alt="" />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="boxContent p__relative">
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
                    <div className="roadmap__bottomLogo">
                        <div className="logoInner d__flex title">
                            <span className="logoChar">
                                T
                            </span>
                            <span className="logoChar">
                                I
                            </span>
                            <span className="logoChar">
                                P
                            </span>
                            <span className="logoChar">
                                S
                            </span>
                            <span className="logoChar">
                                Y
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap
