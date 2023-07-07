import React, { useState, useEffect} from "react";
import "../../styles/home.css";
import CharacterCard from "../component/charactercard";
import PlanetCard from "../component/planetcard";
import VehicleCard from "../component/vehiclecard";

const Home = () => {

	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);	
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		getPeople();
		getPlanets();
		getVehicles();	
	}, []);

	const getPeople = () => {
		fetch('https://www.swapi.tech/api/people/', {
			method: 'GET',
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => {
			console.log(resp.ok);
			console.log(resp.status);
			console.log(resp);
		return resp.json();
		})
		.then(data=> {
			console.log(data);
			setCharacters(data.results);
		})
		.catch(error => {
			console.log(error);
			alert('Oops something went wrong'+ error);
		})
	}

	const getPlanets = () => {
		fetch('https://www.swapi.tech/api/planets/', {
			method: 'GET',
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => {
			console.log(resp.ok);
			console.log(resp.status);
			console.log(resp);
		return resp.json();
		})
		.then(data=> {
			console.log(data);
			setPlanets(data.results);
		})
		.catch(error => {
			console.log(error);
			alert('Oops something went wrong'+ error);
		});
	}
	const getVehicles = () => {
		fetch('https://www.swapi.tech/api/vehicles/', {
			method: 'GET',
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => {
			console.log(resp.ok);
			console.log(resp.status);
			console.log(resp);
		return resp.json();
		})
		.then(data=> {
			console.log(data);
			setVehicles(data.results);
		})
		.catch(error => {
			console.log(error);
			alert('Oops something went wrong'+ error);
		})
	}

	const showCharacters = () =>{
		return characters.map((character, index) =>{
				return(
					<li key={index}
					>
				 		<CharacterCard character={character} />
					</li>
				)				
			})
	}

	const showPlanets = () =>{
		return planets.map((planet, index) =>{
				return(
					<li key={index}
					>
				 		<PlanetCard planet={planet} />
					</li>
				)				
			})
	}
	const showVehicles = () =>{
		return vehicles.map((vehicle, index) =>{
				return(
					<li key={index}
					>
				 		<VehicleCard vehicle={vehicle} />
					</li>
				)				
			})
	}
	return (	
	<div className="container">		
			<h1> Characters</h1>
			<ul className="row d-flex flex-nowrap overflow-auto">
				{showCharacters()}
			</ul>		
		

		<div className="container">
			<h1> Planets</h1>
			<ul className="row d-flex flex-nowrap overflow-auto">
				{showPlanets()}
			</ul>		
		</div>

		<div className="container">
			<h1> Vehicles</h1>
			<ul className="row d-flex flex-nowrap overflow-auto">
				{showVehicles()}
			</ul>
			
		</div>
	</div>
	)
};

export default Home