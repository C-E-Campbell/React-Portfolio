import React from "react";
import style from "./Home.module.scss";
import Header from "../../components/Header/Header";
const Home = () => {
	return (
		<div className={style.home}>
			<Header />
			<div>Home Page</div>
		</div>
	);
};
export default Home;
