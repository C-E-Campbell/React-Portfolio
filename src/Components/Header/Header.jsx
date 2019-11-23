import React from "react";
import style from "./Header.module.scss";
export default function Header() {
  return (
    <div className={style.header}>
      <i className="fab fa-linkedin fa-2x"></i>
      <i className="fab fa-github-square fa-2x"></i>
      <i className="fab fa-youtube-square fa-2x"></i>
      <h4>RESUME</h4>
    </div>
  );
}
