import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Some of My Independent Projects.</h1>
            <div id="portfolio-wrapper" className="cf">
              {resumeData.portfolio &&
                resumeData.portfolio.map(item => {
                  return (
                    <a target="_blank" href={`${item.link}`}>
                      <div className="row portfolio-item">
                        <div className="five columns item-wrap">
                          <img src={`${item.imgurl}`} className="item-img" />
                        </div>
                        <div className="seven columns item-wrap">
                          <h1>{item.name}</h1>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
