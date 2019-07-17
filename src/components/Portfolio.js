import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Some of My Independent Projects.</h1>
          </div>
        </div>
        <div className="row">
          <div id="portfolio-wrapper" className="cf">
            {resumeData.portfolio &&
              resumeData.portfolio.map(item => {
                return (
                  <div className="portfolio-item">
                    <a
                      className="five columns item-wrap"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`${item.link}`}
                    >
                      <div className="">
                        <div className="item-wrap">
                          <img
                            alt={"Portfolio"}
                            src={`${item.imgurl}`}
                            className="item-img"
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h2 className="live">
                                <i className="fa fa-external-link" /> Live
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="seven columns item-wrap">
                      <h4 className="centerText">{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}
