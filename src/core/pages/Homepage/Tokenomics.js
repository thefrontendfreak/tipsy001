import React from 'react'
import Fade from 'react-reveal/Fade';
import Logo from '../../assets/media/logo.svg'
import rightShape from '../../assets/media/right-blue-shape.svg'
import leftShape from '../../assets/media/left-pink-shape.svg'
import midLine from '../../assets/media/line-blue.svg'
import PieImg from '../../assets/media/t-pie.svg'
import DotBg from '../../assets/media/Dots.svg'
import BottomLine from '../../assets/media/stat-bottom-line.svg'
import BoxMirror from '../../assets/media/boxMirror.svg'
const Tokenomics = () => {
    return (
        <div className="tokenomics">
            <div className="tokenomics__heading t__center">
                <h1 className="title mb__10">
                    TOKENOMICS
                </h1>
                <p>
                    Lorem ipsum dolor sit amet
                </p>
            </div>
            <div className="tokenomics__content boxContent boxBlue p__relative">
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
                    <Fade big>
                        <div className="boxContent__block t__center">
                            <h4>
                                TIPSY APPLIES A 1% FEE TO EACH TRANSACTION
                                AND INSTANTLY SPLITS THAT FEE AMONG
                                ALL TIPSY HOLDERS.
                            </h4>
                            <div className="boxContent__block--glowingBall"></div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="tokenomics__pie">
                <Fade bottom>
                    <div className="tokenomics__pie--img">
                        <img src={PieImg} alt="" />
                    </div>
                </Fade>
                <Fade left delay={400}>
                    <div className="tokenomics__pie--awerness">
                        <span className="number">20%</span>
                        <span className="name">AWARENESS</span>
                    </div>
                </Fade>
                <Fade right delay={600}>
                    <div className="tokenomics__pie--liquidity">
                        <span className="number">80%</span>
                        <span className="name">LIQUIDITY</span>
                    </div>
                </Fade>
            </div>
            <div className="tokenomics__stat">
                <Fade big>
                    <div className="tokenomics__stat--wrapper">
                        <div className="tokenomics__stat--logoleft">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="tokenomics__stat--logoright">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="tokenomics__stat--dots">
                            <img src={DotBg} alt="" />
                        </div>
                        <div className="tokenomics__stat--bgCircle"></div>
                        <div className="tokenomics__stat--box">
                            <div className="tokenomics__stat--boxRow d__flex wrap">
                                <div className="tokenomics__stat--block">
                                    <div className="number">
                                        <span>$0.00000612</span>
                                    </div>
                                    <div className="t_title">
                                        <span className="pink">
                                            Price
                                        </span>
                                    </div>
                                </div>
                                <div className="tokenomics__stat--block">
                                    <div className="number">
                                        <span>$1.000.000</span>
                                    </div>
                                    <div className="t_title">
                                        <span className="pink">
                                            MARKET CAP
                                        </span>
                                    </div>
                                </div>
                                <div className="tokenomics__stat--block">
                                    <div className="number">
                                        <span>$10.000.000</span>
                                    </div>
                                    <div className="t_title">
                                        <span className="blue">
                                            TOTAL SUPPLY
                                        </span>
                                    </div>
                                </div>
                                <div className="tokenomics__stat--block">
                                    <div className="number">
                                        <span>1%</span>
                                    </div>
                                    <div className="t_title">
                                        <span className="blue">
                                            FEE REDISTRIBUTION
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="tokenomics__stat--bottomLine">
                <img src={BottomLine} alt="" />
            </div>
            <div className="tokenomics__stat--boxMirror">
                <img src={BoxMirror} alt="" />
            </div>
        </div>
    )
}

export default Tokenomics
