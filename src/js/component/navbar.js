import React, { useContext } from "react";
import "../../styles/navbar.css";
import { Navigate } from "react-router";
import { Context } from "../store/appContext";


const Navbar = () => {
	
	const {store, actions} = useContext(Context);
	
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">				
				<img src="https://www.pngplay.com/wp-content/uploads/2/Star-Wars-Logo-PNG-Background.png" onClick={()=> Navigate("/home")} style={{width:"10%",height:"20%",objectFit:"cover"}}></img>
				<div className="d-flex me-5">				
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favourites
						{store.favourites.length}
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favourites.map((item,index)=>{
							return(
								<li key={index}
								>
									<div className="d-flex justify-content around">
										<div>
											{item}	
										</div>
										<div>
											<i class="fas fa-trash"></i>
										</div>
									</div>									
								</li>
							)
						})}
					</ul>
				</div>
			</div>				
			</div>			
		</nav>
	);
};

export default Navbar
