import React from "react";
import style from "./Project.module.scss";
export default function Project(props) {
  return (
    <div className={style.projectContainer}>
      <img src={props.img} alt="project poster" />
      <h2>{props.title}</h2>
      <h4>Project Description</h4>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
