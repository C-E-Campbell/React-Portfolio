import React from "react";
import style from "./App.module.scss";
import Project from "./Components/Project/Project";
import horror from "./assets/horror.jpg";
import devtennis from "./assets/devtennis.jpg";
import group from "./assets/group.jpg";
import Header from "./Components/Header/Header";
import Sass from "./assets/sasscomp.png";
import Redux from "./assets/reduxcomp.png";
import Reactpng from "./assets/reactcomp.png";
import Postgresql from "./assets/postgresqlcomp.png";
import Node from "./assets/nodecomp.png";
import JS from "./assets/jscomp.jpg";
import Figma from "./assets/figmacomp.png";
import Express from "./assets/expresscomp.png";
const App = () => {
  return (
    <div className={style.home}>
      <Header />
      <div className={style.body}>
        <div className={style.profile}></div>
        <h1>Charles Campbell</h1>
        <h3>Full Stack Web Developer</h3>
      </div>
      <div className={style.section}>
        <h2 className={style.projectH2}>About</h2>
        <p>
          I find myself most days thinking of app ideas, perusing various
          documentation or coding my projects. My weapons of choice are the MERN
          stack, PostgreSQL and a host of cool libraries.
        </p>
        <p>
          While I spend most of time coding I also enjoy playing guitar and
          watching cooking shows.
        </p>
      </div>
      <div className={style.section}>
        <h2 className={style.projectH2}>Skills</h2>
        <div>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node</span>
          <span>PostgreSQL</span>
          <span>Redux</span>
          <span>Sass</span>
          <span>Figma</span>
        </div>
        <div className={style.skills}>
          <img src={JS} alt="js" />
          <img src={Reactpng} alt="js" />
          <img src={Node} alt="js" />
          <img src={Express} alt="js" />
          <img src={Postgresql} alt="js" />
          <img src={Redux} alt="js" />
          <img src={Sass} alt="js" />
          <img src={Figma} alt="js" />
        </div>
      </div>
      <div className={style.section}>
        <h2 className={style.projectH2}>Projects</h2>
      </div>

      <div className={style.projects}>
        <Project
          site={true}
          img={devtennis}
          title={"Dev Tennis"}
          description={
            "A fullstack E-Commerce website. Features include Stripe checkout, account creation and fully functional cart."
          }
          tech1={"React"}
          tech7={"React Redux"}
          tech2={"PostgreSQL"}
          tech3={"Node with Express.js"}
          tech4={"Nodemailer for emails"}
          tech5={"SportsRadar API for player stats"}
          tech6={"Inventory assets hosted on AWS S3"}
          siteURL={"https://devtennis.xyz/"}
          githubURL={"https://github.com/C-E-Campbell/devTennis"}
        />
        <Project
          site={true}
          img={horror}
          title={"100DaysOfHorror"}
          description={
            "A movie app where users try to complete a 'Watch List' challenge. Features include full CRUD and authentication with bcrypt "
          }
          tech1={"React"}
          tech2={"PostgreSQL"}
          tech3={"Node with Express.js"}
          tech5={"OMDB movie API"}
          tech6={"Authentication with BCrypt"}
          login={"Test Login Info: "}
          user={"User: test44@test.com"}
          pass={"Pass: test44"}
          siteURL={"https://100daysofhorror.com/"}
          githubURL={"https://github.com/C-E-Campbell/100daysofhorror"}
        />
        <Project
          site={true}
          img={group}
          title={"This Is DevMountain"}
          description={
            "A Fullstack app designed for students of DevMountain to upload information on their personal projects for all other students to view"
          }
          tech1={"React"}
          tech2={"PostgreSQL"}
          tech3={"Node with Express.js"}
          tech4={"Socket.io"}
          tech5={"Chart.js"}
          tech6={"Redis"}
          login={"Test Login Info: "}
          user={"User: test44@test.com"}
          pass={"Pass: test44"}
          siteURL={"http://thisisdevmountain.com"}
          githubURL={"https://github.com/C-E-Campbell/groupProjectWPX15"}
        />
      </div>
      <div id="contact" className={style.section}>
        <h2 className={style.projectH2}>Contact</h2>
        <h2>
          <span>Email:</span>
          <a
            className={style.emailh2}
            href="mailto:charles.e.campbell1989@gmail.com"
          >
            charles.e.campbell1989@gmail.com
          </a>
        </h2>
      </div>
    </div>
  );
};
export default App;
