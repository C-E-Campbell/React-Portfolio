import React from "react";
import style from "./App.module.scss";
import Project from "./Components/Project/Project";
import horror from "./assets/horror.jpg";
import devtennis from "./assets/devtennis.jpg";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
const App = () => {
  return (
    <div className={style.home}>
      <Header />
      <div className={style.body}>
        <div className={style.profile}></div>
        <h1>Charles Campbell</h1>
        <h3>Front End Web Developer</h3>
        <p>
          I find myself most days thinking of app ideas, perusing various
          documentation or coding my projects. I found my passion for web
          development later than I would have wished and now consider myself a
          'Forever Student' of the craft.
        </p>
      </div>
      <h2 className={style.projectH2}>PROJECTS</h2>
      <div className={style.projects}>
        <Project
          img={horror}
          title={"100DaysOfHorror"}
          description={
            "A movie app where users try to complete a 'Watch List' challenge. Features include account dashboard and opinion page "
          }
          tech1={"React"}
          tech2={"MongoDB"}
          tech3={"Node with Express.js"}
          tech4={"Chart.js"}
          tech5={"OMDB movie API"}
          siteURL={"https://100daysofhorror.com/"}
          githubURL={"https://github.com/C-E-Campbell/100daysofhorror"}
        />
        <Project
          img={devtennis}
          title={"Dev Tennis"}
          description={
            "A fullstack E-Commerce website. Features include Stripe checkout, account creation and fully functional cart."
          }
          tech1={"React"}
          tech2={"PostgreSQL"}
          tech3={"Node with Express.js"}
          tech4={"Nodemailer for emails"}
          tech5={"SportsRadar API for player stats"}
          tech6={"Inventory assets hosted on AWS S3"}
          siteURL={"https://devtennis.xyz/"}
          githubURL={"https://github.com/C-E-Campbell/devTennis"}
        />
        <Project title={"Group Project"} description={"Nothing Yet"} />
      </div>
      <Form />
    </div>
  );
};
export default App;
