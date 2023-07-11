import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./views/home";
import NoPage from "./views/nopage";
import SingleCharacter from "./views/singlecharacter"
import SinglePlanet from "./views/singleplanet"
import SingleVehicle from "./views/singlevehicle"
import injectContext from "./store/appContext";
import Navbar from "./component/navbar";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar/>				
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/details-character/:uid" element={<SingleCharacter />} />
						<Route path="/details-planet/:uid" element={<SinglePlanet />} />
						<Route path="/details-vehicle/:uid" element={<SingleVehicle />} />						
						<Route path="*" element={<NoPage />} />
					</Routes>					
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
