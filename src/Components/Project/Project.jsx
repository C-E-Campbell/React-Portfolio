import React from "react";
import style from "./Project.module.scss";
export default function Project(props) {
  return (
    <div className={style.projectContainer}>
      <img src={props.img} alt="project poster" />
      <h2>{props.title}</h2>
      <h4>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
        rerum quaerat expedita magnam impedit aliquam.
      </h4>
      <ul>
        <li>Tech 1</li>
        <li>Tech 2</li>
        <li>Tech 3</li>
        <li>Tech 4</li>
        <li>Tech 5</li>
      </ul>
      <button className={style.projectBtn}>Live Site</button>
      <button className={style.projectBtn}>View Code</button>
    </div>
  );
}
