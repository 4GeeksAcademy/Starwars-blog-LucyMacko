import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "../../styles/singlevehicle.css";

const SingleVehicle = () => {
	
	const [vehicle, setVehicle] = useState();	
	const params = useParams();

	useEffect(() => {
		fetchSingleCharacter();
	})

	const fetchSingleCharacter = () => {
		fetch('https://www.swapi.tech/api/vehiclese/' + params.uid, {
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
			setVehicle(data.result);
		})
		.catch(error=>{
			console.log(error);
		})
	}	
	
	return (
		<div className="container-fluid">
			{vehicle ? (
				<div className="card mb-2" id="singleCardSize">
					<div className="row g-0">
						<div className="col-md-5">
							<img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} 
                            className="img-fluid rounded-start" alt="vehicle photo"/>
						</div>
						<div className="col-md-7">
							<div className="card-body">
								<h2 className="card-title text-center my-2">{vehicle.properties.name}</h2>
								<p className="card-text text-center pt-4">Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
							</div>
						</div>
					</div>
					<div className="container-fluid" id="footer">
						<div className="row pt-3" id="vehicleInfo">
							<div className="col-2 text-center">
								<p className="strong">Model</p>
								<p>{vehicle.properties.model}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Class</p>
								<p>{vehicle.properties.vehicle_class}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Crew</p>
								<p>{vehicle.properties.crew}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Passengers</p>
								<p>{vehicle.properties.passengers}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Max speed</p>
								<p>{vehicle.properties.max_atmosphering_speed}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Consumables</p>
								<p>{vehicle.properties.consumables}</p>
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

export default SingleVehicle
