import React, { Component } from "react";
import Input from "./common/Input";
export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", msg: "", loading: false };
  }
  handleSubmit(e) {
    e.preventDefault();
    let userData = this.state;
    this.setState({ loading: true });
    fetch("https://elementarycreative.com/send_form_email.php", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      console.log("Success");
    });
  }
  render() {
    return (
      <section id="contact">
        <div className="contactUsForm row">
          <div className="twelve section-head centerText columns">
            <h3 className="lead">
              Feel free to contact me for any work or suggestions below
            </h3>
          </div>

          <form>
            <div className="columns six">
              <Input
                id={"name"}
                name={"name"}
                type={"text"}
                value={this.state.name}
                handleChange={e => {
                  this.setState({ name: e.target.value });
                }}
                placeholder={"Name"}
              />
            </div>
            <div className="columns six">
              <Input
                id={"email"}
                name={"email"}
                type={"text"}
                value={this.state.email}
                handleChange={e => {
                  this.setState({ email: e.target.value });
                }}
                placeholder={"Email"}
              />
            </div>
            <div className="columns twelve">
              <textarea
                onChange={e => {
                  this.setState({ msg: e.target.value });
                }}
                id={"Message"}
                name={"msg"}
                placeholder={"Message"}
                value={this.state.msg}
              />
            </div>
            <div className="columns centerText twelve">
              <button
                onClick={e => {
                  this.handleSubmit(e);
                }}
                id={"Submit"}
                name={"Submit"}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
