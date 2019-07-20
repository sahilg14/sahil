import React, { Component } from "react";
import Input from "./common/Input";
export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      telephone: "",
      email: "",
      message: "",
      loading: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, telephone, email, message } = this.state;
    this.setState({ loading: true });
    fetch("https://elementarycreative.com/send_form_email.php", {
      method: "POST",
      body: JSON.stringify({ name, telephone, email, message }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      console.log("Success");
    });
  };
  render() {
    return (
      <section id="contact">
        <div className="contactUsForm row">
          <div className="twelve section-head centerText columns">
            <h3 className="lead">
              Feel free to contact me for any work or suggestions below
            </h3>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="columns four">
              <Input
                id={"name"}
                name={"name"}
                type={"text"}
                value={this.state.name}
                handleChange={this.onChange}
                placeholder={"Name"}
              />
            </div>
            <div className="columns four">
              <Input
                id={"telephone"}
                name={"telephone"}
                type={"text"}
                value={this.state.telephone}
                handleChange={this.onChange}
                placeholder={"Phone"}
              />
            </div>
            <div className="columns four">
              <Input
                id={"email"}
                name={"email"}
                type={"text"}
                value={this.state.email}
                handleChange={this.onChange}
                placeholder={"Email"}
              />
            </div>
            <div className="columns twelve">
              <textarea
                onChange={this.onChange}
                id={"message"}
                name={"message"}
                placeholder={"Message"}
                value={this.state.message}
              />
            </div>
            <div className="columns centerText twelve">
              <button type="submit" id={"Submit"} name={"Submit"}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
