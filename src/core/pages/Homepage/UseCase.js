import React from 'react'
import Fade from 'react-reveal/Fade';
import TrophyIcon from '../../assets/media/trophy.svg'
import LadyIcon from '../../assets/media/lady.svg'
import MarketingIcon from '../../assets/media/marketing.svg'
import MobileIcon from '../../assets/media/mobile-in-hand.svg'
import Separateline from '../../assets/media/usecase-line.svg'
import NodeLeft from '../../assets/media/left-node.svg'
import NodeRight from '../../assets/media/right-node.svg'
import NodeBottomLeft from '../../assets/media/bottom-left-node.svg'
import NodeBottomRight from '../../assets/media/bottom-right-node.svg'
import BottomBanner from '../../assets/media/use-case-bottom-banner.png'

const UseCase = () => {
    return (
        <div className="useCase">
            <div className="useCase__wrapper">
                <div className="useCase__heading">
                    <h3>
                        USE Case
                    </h3>
                </div>
                <div className="useCase__separator">
                    <img src={Separateline} alt="" />
                </div>
                <div className="useCase__features">
                    <div className="useCase__featuresRow d__flex wrap jc__between">
                        <div className="useCase__featureCol t__center">
                            <div className="useCase__featureCol--content">
                                <h3>
                                    GIVEAWAY
                                </h3>
                                <p>
                                    Brands and influncers can giveway tipsies to their
                                    communities for incentivizing social campaign promotions
                                </p>
                                <span className="thumbBg">
                                    <img src={TrophyIcon} alt="" className="thumb" />
                                </span>
                            </div>
                            <div className="useCase__featureCol--node">
                                <img src={NodeLeft} alt="" />
                            </div>
                        </div>
                        <div className="useCase__featureCol t__center">
                            <div className="useCase__featureCol--content">
                                <h3>
                                    MARKETING
                                </h3>
                                <p>
                                    Brands and advertisers buy and pay infl
                                </p>
                                <span className="thumbBg">
                                    <img src={MarketingIcon} alt="" className="thumb" />
                                </span>
                            </div>
                            <div className="useCase__featureCol--node">
                                <img src={NodeRight} alt="" />
                            </div>
                        </div>
                        <div className="useCase__featureCol t__center">
                            <div className="useCase__featureCol--content">
                                <h3>
                                    TIPSY KUDOS
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                                <span className="thumbBg">
                                    <img src={LadyIcon} alt="" className="thumb" />
                                </span>
                            </div>
                            <div className="useCase__featureCol--node">
                                <img src={NodeBottomLeft} alt="" />
                            </div>
                        </div>
                        <div className="useCase__featureCol t__center">
                            <div className="useCase__featureCol--content">
                                <h3>
                                    INFLUENCERS
                                </h3>
                                <p>
                                    Brands buy and pay tipsies to have their producti
                                </p>
                                <span className="thumbBg">
                                    <img src={MobileIcon} alt="" className="thumb" />
                                </span>
                            </div>
                            <div className="useCase__featureCol--node">
                                <img src={NodeBottomRight} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="useCase__bottomBanner">
                    <img src={BottomBanner} alt="" />
                </div>
            </div>
        </div>
    )
}

export default UseCase
