import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
const App = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/projects' component={Projects} />
			<Route path='/contact' component={Contact} />
		</Switch>
	);
};

export default App;
