import React from "react";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.body}>
        <div className={style.profile}></div>
        <h1>Charles Campbell</h1>
        <h3>Front End Developer</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab magni
          iusto eos temporibus nostrum reprehenderit! Quidem, libero!
          Doloremque, earum tempore!
        </p>
      </div>
    </div>
  );
};
export default Home;
