import React from "react";
import style from "./Project.module.scss";
export default function Project(props) {
  return (
    <div className={style.projectContainer}>
      <img src={props.img} alt="project poster" />
      <h2>{props.title}</h2>
      <h4>{props.description}</h4>
      <ul>
        <li>{props.tech1}</li>
        <li>{props.tech2}</li>
        <li>{props.tech3}</li>
        <li>{props.tech4}</li>
        <li>{props.tech5}</li>
        <li>{props.tech6}</li>
      </ul>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={props.siteURL}
        className={style.projectBtn}
      >
        Live Site
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={props.githubURL}
        className={style.projectBtn}
      >
        View Code
      </a>
    </div>
  );
}
