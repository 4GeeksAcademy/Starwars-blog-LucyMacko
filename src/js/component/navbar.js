import React from "react";
import "../../styles/navbar.css";
import { Navigate } from "react-router";



export const Navbar = () => {	
	
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">				
				<img src="https://www.pngplay.com/wp-content/uploads/2/Star-Wars-Logo-PNG-Background.png" onClick={()=> Navigate("/home")} style={{width:"10%",height:"20%",objectFit:"cover"}}></img>				
			</div>
			<div className="d-flex me-5">				
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favourites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>One</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
