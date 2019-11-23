import React, { Component } from "react";
import style from "./Form.module.scss";

export default class Form extends Component {
  state = {
    email: "",
    message: ""
  };
  render() {
    return (
      <div className={style.formContainer}>
        <h2>Contact Me</h2>
        <form
          name="contact"
          data-netlify="true"
          onSubmit={e => e.preventDefault()}
          className={style.form}
        >
          <label>Email</label>
          <input
            name="email"
            onChange={e => this.setState({ email: e.target.value })}
            type="email"
            value={this.state.email}
          />
          <label>Message</label>
          <textarea
            rows="10"
            cols="30"
            name="message"
            onChange={e => this.setState({ message: e.target.value })}
            type="email"
            value={this.state.message}
          />
          <button>Send It!</button>
        </form>
      </div>
    );
  }
}
