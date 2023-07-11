import React, { useState,useContext } from "react";
import { useNavigate } from "react-router";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

const Navbar = () => {
	
	const {store, actions} = useContext(Context);
	const navigate = useNavigate();
	const [dropdownOpen, setDropdownOpen] = useState(false);
		
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">				
				<img className="ms-5" src="https://www.pngplay.com/wp-content/uploads/2/Star-Wars-Logo-PNG-Background.png" onClick={()=> navigate("/")}></img>
				<div className="d-flex">				
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle me-5" 
						type="button" 
						id="dropdownMenuButton1" 
						data-bs-toggle="dropdown" 
						aria-expanded="false" 
						onMouseEnter={() => setDropdownOpen(true)}
						>
						Favourites {store.favourites.length}
					</button>
					{dropdownOpen && store.favourites.length > 0 &&(
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							{store.favourites.map((item,index)=>{
								return(
									<li key={index}
									>
										<div className="d-flex justify-content-between">
											<div className="ms-2 my-1">
												{item}	
											</div>
											<div className="me-2">
												<i className="fas fa-trash mt-2" onClick={(e) => {
													e.stopPropagation(); 
													actions.deleteFavourites(item);
												}}/>										
											</div>
										</div>									
									</li>
								)
							})}
						</ul>
					)}
				</div>
			</div>				
			</div>			
		</nav>
	);
};

export default Navbar
