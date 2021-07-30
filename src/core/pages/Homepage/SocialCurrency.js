import React from 'react'
import CurrencyCircle from '../../assets/media/currency-circle.svg'
import Thumb1 from '../../assets/media/chr1.svg'
import Thumb2 from '../../assets/media/brands.svg'
import Thumb3 from '../../assets/media/chr2.svg'
import Thumbcenter from '../../assets/media/chr-center.svg'
import Thumb4 from '../../assets/media/influencer.svg'
import Thumb5 from '../../assets/media/exposer.svg'
import Thumb6 from '../../assets/media/chr-3.svg'
import Thumb7 from '../../assets/media/awarness.svg'
import Thumb8 from '../../assets/media/chr-4.svg'
import Thumb9 from '../../assets/media/giveway.svg'
import Thumb10 from '../../assets/media/famous.svg'
import TwitterComment from '../../assets/media/twitter-comment.svg'
import Zoom from 'react-reveal/Zoom';

const SocialCurrency = () => {


    return (
        <div className="socialCurrency">
            <div className="socialCurrency__bgCirclepink"></div>
            <div className="socialCurrency__bgCircleblue"></div>
            <div className="socialCurrency__wrapper">
                <div className="socialCurrency__heading t__center">
                    <h1 className="title">
                        SOCIAL CURRENCY
                    </h1>
                    <p>
                        The future of social media marketing
                    </p>
                </div>
                <div className="socialCurrency__content">
                    <Zoom>
                        <div className="socialCurrency__content--circleImg d__flex jc__center">
                            <img src={CurrencyCircle} alt="" />
                        </div>
                    </Zoom>
                    <Zoom delay={1000} offset={200}>
                        <div className="socialCurrency__thumb thumb1">
                            <img src={Thumb1} alt="" />
                        </div>
                    </Zoom>
                    <Zoom delay={1000} offset={200}>
                        <div className="socialCurrency__thumb thumb2">
                            <img src={Thumb2} alt="" />
                        </div>
                    </Zoom>
                    <Zoom delay={1000} offset={100}>
                        <div className="socialCurrency__thumb thumb3">
                            <img src={Thumb3} alt="" />
                        </div>
                    </Zoom>
                    <Zoom delay={200} offset={-50}>
                        <div className="socialCurrency__thumb thumbCenter">
                            <img src={Thumbcenter} alt="" />
                        </div>
                    </Zoom>
                    <Zoom delay={400}  offset={50}>
                        <div className="socialCurrency__thumb thumbTwitter">
                            <img src={TwitterComment} alt="" />
                        </div>
                    </Zoom>
                    <Zoom delay={1000}>
                        <div className="socialCurrency__thumb thumb4">
                            <img src={Thumb4} alt="" />
                        </div>
                    </Zoom>
                    <Zoom delay={1000}>
                        <div className="socialCurrency__thumb thumb5">
                            <img src={Thumb5} alt="" />
                        </div>
                    </Zoom>
                    <Zoom delay={200} offset={-250}>
                        <div className="socialCurrency__thumb thumb6">
                            <img src={Thumb6} alt="" />
                        </div>
                    </Zoom>
                    <Zoom delay={1000}>
                        <div className="socialCurrency__thumb thumb7">
                            <img src={Thumb7} alt="" />
                        </div>
                    </Zoom>
                    <Zoom delay={200} offset={-250}>
                        <div className="socialCurrency__thumb thumb8">
                            <img src={Thumb8} alt="" />
                        </div>
                    </Zoom>
                    <Zoom delay={1000}>
                        <div className="socialCurrency__thumb thumb9">
                            <img src={Thumb9} alt="" />
                        </div>
                    </Zoom>
                    <Zoom delay={1000}>
                        <div className="socialCurrency__thumb thumb10">
                            <img src={Thumb10} alt="" />
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default SocialCurrency
