import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import moodwood from '../../styles/img/1_moodwood.jpg';
import moodwoodfull from "../../styles/img/1_moodwood_full.jpg";

import rumspringa from "../../styles/img/2_rumspringa.jpg";
import rumspringafull from "../../styles/img/2_rumspringa_full.jpg";

import punklives from "../../styles/img/3_punklives.jpg";
import punklivesfull from "../../styles/img/3_punklives_full.jpg";

import punkrocknight from "../../styles/img/4_punkrocknight.jpg";
import punkrocknightfull from "../../styles/img/4_punkrocknight_full.jpg";

import cremekarfest from "../../styles/img/5_cremekarfest.jpg";
import cremekarfestfull from "../../styles/img/5_cremekarfest_full.jpg";

import daily from "../../styles/img/5_daily.jpg";
import dailyfull from "../../styles/img/5_daily_full.jpg";

import punkrockbrawl from "../../styles/img/6_punkrockbrawl.jpg";
import punkrockbrawlfull from "../../styles/img/6_punkrockbrawl_full.jpg";

import pennywasright from "../../styles/img/7_pennywasright.jpg";
import pennywasrightfull from "../../styles/img/7_pennywasright_full.jpg";

import elephant from "../../styles/img/8_elephant.jpg";
import elephantfull from "../../styles/img/8_elephant_full.jpg";

import foriam from "../../styles/img/9_foriam.jpg";
import foriamfull from "../../styles/img/9_foriam_full.jpg";

import punkrocknight2 from "../../styles/img/10_punkrocknight.jpg";
import punkrocknight2full from "../../styles/img/10_punkrocknight_full.jpg";

import portfolio from "../../styles/img/11_portfolio.jpg";
import portfoliofull from "../../styles/img/11_portfolio_full.jpg";

import oolf from "../../styles/img/12_oolf.jpg";
import oolffull from "../../styles/img/12_oolf_full.jpg";

import atn from "../../styles/img/13_atn.jpg";
import atnfull from "../../styles/img/13_atn_full.jpg";


class Portfolio extends React.Component {
    constructor() {
        super();

        this.state = { 
            currentImage: 0,
            lightboxIsOpen: false,
            portfoliopics: [
                { src: punklives, width: 2, height: 3 },
                { src: oolf, width: 1, height: 1 },
                { src: elephant, width: 2, height: 3 },
                { src: punkrockbrawl, width: 2, height: 1 },
                { src: rumspringa, width: 1, height: 1 },
                { src: cremekarfest, width: 3, height: 2 },                
                { src: punkrocknight2, width: 2, height: 3 },
                { src: pennywasright, width: 1, height: 1 },
                { src: moodwood, width: 1, height: 1 },
                { src: foriam, width: 2, height: 3 },
                { src: punkrocknight, width: 2, height: 1 },
                { src: daily, width: 1, height: 1 },
                { src: atn, width: 1, height: 1 },
                { src: portfolio, width: 2, height: 1 },
            ],
            lightboxpics: [
                { src: punklivesfull },
                { src: oolffull },
                { src: elephantfull },
                { src: punkrockbrawlfull },
                { src: rumspringafull },
                { src: cremekarfestfull },                
                { src: punkrocknight2full },
                { src: pennywasrightfull },
                { src: moodwoodfull },               
                { src: foriamfull },
                { src: punkrocknightfull },
                { src: dailyfull },
                { src: atnfull },
                { src: portfoliofull },
            ]         
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
    }

    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index, 
            lightboxIsOpen: true
        });
    }

    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        });
    }

    gotoPrevious() {
        this.setState({ 
            currentImage: this.state.currentImage - 1 
        });
    }
    gotoNext() {
        this.setState({ 
            currentImage: this.state.currentImage + 1 
        });
    }

    render() {
        return <section className="portfolio">
            <h2>Here's some of my work</h2>

            <div className="container">
                <Gallery photos={this.state.portfoliopics}
                    onClick={this.openLightbox}
                    columns={5} />
                <Lightbox images={this.state.lightboxpics}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext} />
            </div>
        </section>;
    };
}

export default Portfolio;