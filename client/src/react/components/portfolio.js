import React from 'react';

class Portfolio extends React.Component {
    constructor() {
        super();

        this.albumDesigns = "https://www.facebook.com/media/set/?set=a.1838150393137085.1073741829.1838143856471072&type=1&l=92a4bd1cef";
        this.albumPosters = "https://www.facebook.com/media/set/?set=a.1838149696470488.1073741828.1838143856471072&type=1&l=0589152565";
    }
    render() {
        return <section className="portfolio">
            <h2>Here's some of my work</h2>

            <div className="board">
                <a className="board__img board__img__1" href={this.albumPosters} target="_blank">
                    <figure />
                </a>
                <a className="board__img board__img__2" href={this.albumPosters} target="_blank">
                    <figure />
                </a>
                <a className="board__img board__img__3" href={this.albumDesigns} target="_blank">
                    <figure />
                </a>
                <a className="board__img board__img__4" href={this.albumPosters} target="_blank">
                    <figure />
                </a>
                <a className="board__img board__img__5" href={this.albumPosters} target="_blank">
                    <figure />
                </a>
                <a className="board__img board__img__6" href={this.albumDesigns} target="_blank">
                    <figure />
                </a>
                <a className="board__img board__img__7" href={this.albumPosters} target="_blank">
                    <figure />
                </a>
                <a className="board__img board__img__8" href={this.albumPosters} target="_blank">
                    <figure />
                </a>
                <a className="board__img board__img__9" href={this.albumPosters} target="_blank">
                    <figure />
                </a>
                <a className="board__img board__img__10" href={this.albumPosters} target="_blank">
                <figure />
                </a>
                <a className="board__img board__img__11" href={this.albumPosters} target="_blank">
                <figure />
                </a>
            </div>
        </section>;
    };
}

export default Portfolio;