import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import Home from "../../Pages/Home/Home";
import Projects from "../../Pages/Projects/Projects";
import Contact from "../../Pages/Contact/Contact";
const Header = () => {
	return (
		<nav>
			<Link to='/'>About</Link>
			<Link to='/projects'>Projects</Link>
			<Link to='/contact'>Contact</Link>
		</nav>
	);
};
export default Header;
