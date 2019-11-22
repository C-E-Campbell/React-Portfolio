import React from "react";
import style from "./Project.module.scss";
export default function Project(props) {
  return (
    <div className={style.projectContainer}>
      <img src={props.img} alt="project poster" />
    </div>
  );
}
