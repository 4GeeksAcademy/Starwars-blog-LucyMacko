import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "../../styles/singleplanet.css";

const SinglePlanet = (props) => {
	
	const [planet, setPlanet] = useState();	
	const params = useParams();

	useEffect(() => {
		fetchSinglePlanet();
	})

	const fetchSinglePlanet = () => {
		fetch('https://www.swapi.tech/api/planets/' + params.uid, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp=> {			
			console.log(resp.text)
			return resp.json();
		})
		.then(data=>{					
			console.log(data.result)
			setPlanet(data.result);
		})
		.catch(error=>{
			console.log(error);
		})
	}
		
	return (
		<div className="container-fluid">
			{planet ? (
				<div className="card mb-2" id="singleCardSize">
					<div className="row g-0">
						<div className="col-md-5">
							<img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid == 1 ? "6" : props.planet.uid}.jpg`} 
							className="img-fluid rounded-start" 
							alt="planetPicture"/>
						</div>
						<div className="col-md-7">
							<div className="card-body">
								<h2 className="card-title text-center my-2">{planet.properties.name}</h2>
								<p className="card-text text-center pt-4">Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
							</div>
						</div>
					</div>
					<div className="container-fluid" id="footer">
						<div className="row pt-3" id="planetInfo">
							<div className="col-2 text-center">
								<p className="strong">Name</p>
								<p>{planet.properties.name}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Terrain</p>
								<p>{planet.properties.terrain}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Water</p>
								<p>{planet.properties.surface_water}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Climate</p>
								<p>{planet.properties.climate}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Population</p>
								<p>{planet.properties.population}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Obital period</p>
								<p>{planet.properties.orbital_period}</p>
							</div>
						</div>
					</div>
				</div>
				) : (
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
			)}
		</div>		
	);
}

export default SinglePlanet
