import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact to='/' component={Home} />
				<Route to='/projects' component={Projects} />
				<Route to='/contact' component={Contact} />
			</Switch>
		</Router>
	);
};

export default App;
