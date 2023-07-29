import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import React from "react";
import Contact from "./components/Contact";
function App() {
	return (
		<React.Fragment>
			<NavBar />
			<Home />
			<About />
			<Skills />
			<Work />
			<Contact/>
		</React.Fragment>
	);
}

export default App;
