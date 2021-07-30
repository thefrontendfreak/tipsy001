import React from 'react'
import BuyNow from './BuyNow'
import Roadmap from './Roadmap'
import SocialCurrency from './SocialCurrency'
import Tokenomics from './Tokenomics'
import Topbanner from './Topbanner'
import TwitterShare from './TwitterShare'
import UseCase from './UseCase'
import Footer from '../../layout/Footer';
import { Element } from "react-scroll";

const HomePage = () => {
    return (
        <div className="pageWrapper">
            <section>
                <Topbanner/>
            </section>
            <section>
                <BuyNow/>
            </section>
            <Element id="social_currency" name="social_currency">
                <SocialCurrency/>
            </Element>
            <Element id="use_case" name="use_case">
                <UseCase/>
            </Element>
            <Element id="tokenomics" name="tokenomics">
                <Tokenomics/>
            </Element>
            <Element id="get_social" name="get_social">
                <TwitterShare/>
            </Element>
            <Element id="roadmap" name="roadmap">
                <Roadmap/>
            </Element>
            <section>
                <Footer/>
            </section>
        </div>
    )
}

export default HomePage
