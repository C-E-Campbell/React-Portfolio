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
        <form className={style.form}>
          <label>Email</label>
          <input
            name="email"
            onChange={e => this.setState({ email: e.target.value })}
            type="email"
          />
          <label>Message</label>
          <textarea
            placeholder="I have an idea for an amazing app!"
            rows="10"
            cols="30"
            name="message"
            onChange={e => this.setState({ message: e.target.value })}
            type="email"
          />
        </form>
      </div>
    );
  }
}
