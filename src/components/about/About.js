import React, { Component } from "react";
import "./index.css";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="five columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>

          <div className="seven columns main-col">
            <h2>About Me</h2>
            <p>
              {resumeData.aboutme &&
                resumeData.aboutme.map((item) => {
                  return <p>{item}</p>;
                })}
            </p>
            <br/>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span>{resumeData.position}</span>
                  <br/>
                  <span>{resumeData.address}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
