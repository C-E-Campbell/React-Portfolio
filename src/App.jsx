import React from "react";
import style from "./App.module.scss";
import Project from "./Components/Project/Project";
import horror from "./assets/horror.jpg";
import devtennis from "./assets/devtennis.jpg";
const App = () => {
  return (
    <div className={style.home}>
      <div className={style.body}>
        <div className={style.profile}></div>
        <h1>Charles Campbell</h1>
        <h3>Front End Web Developer</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab magni
          iusto eos temporibus nostrum reprehenderit! Quidem, libero!
          Doloremque, earum tempore!
        </p>
      </div>
      <div className={style.projects}>
        <Project img={horror} />
        <Project img={devtennis} />
      </div>
    </div>
  );
};
export default App;
