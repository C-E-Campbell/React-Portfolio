import React from "react";
import style from "./Header.module.scss";
import resume from "./resume.pdf";
export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.headerBox}>
        <a
          href="https://www.linkedin.com/in/cecampbell904/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://github.com/C-E-Campbell"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github-square fa-2x"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCW2XxT0Ry0IXJ5qH1rRgrZA"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-youtube-square fa-2x"></i>
        </a>
        <a href={resume} rel="noopener noreferrer" target="_blank">
          <h4>RESUME</h4>
        </a>
      </div>
    </div>
  );
}
