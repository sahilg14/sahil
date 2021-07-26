import React from "react";
import Input from "../common/Input";
import "./index.css";

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      telephone: "",
      email: "",
      message: "",
      loading: false,
      error: "",
      success: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, telephone, email, message } = this.state;
    this.setState({ loading: true });
    fetch(
      "https://bg7m4eb14h.execute-api.us-east-1.amazonaws.com/dev/email/send",
      {
        method: "POST",
        body: JSON.stringify({ name, telephone, email, message }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log("Success");
        console.log(response);
        this.setState({
          success:
            "Your message has been delivered. I will get back to you as soon as possible.",
          loading: false,
          name: "",
          telephone: "",
          email: "",
          message: "",
          error: "",
        });
      })
      .catch((err) => {
        console.log("error", err);
        this.setState({
          error:
            "There was an error sending your email. Please try again later.",
          loading: false,
          success: "",
        });
      });
  };
  render() {
    return (
      <section id="contact">
        <div className="contactUsForm row">
          <div className="twelve section-head centerText columns">
            {this.state.success && (
              <h3 className="lead success">{this.state.success}</h3>
            )}
            {this.state.error && (
              <h3 className="lead error">{this.state.error}</h3>
            )}
            <h3 className="lead">
              Feel free to contact me to connect
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
                id={"email"}
                name={"email"}
                type={"text"}
                value={this.state.email}
                handleChange={this.onChange}
                placeholder={"Email"}
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
