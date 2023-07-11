import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "../../styles/singlecharacter.css";

const SingleCharacter = () => {

	const [character, setCharacter] = useState();	
	const params = useParams();

	useEffect(() => {
		fetchSingleCharacter();
	})

	const fetchSingleCharacter = () => {
		fetch('https://www.swapi.tech/api/people/' + params.uid, {
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
			setCharacter(data.result);
		})
		.catch(error=>{
			console.log(error);
		})
	}	
	
	return (
		<div className="container-fluid">
			{character ? (
				<div className="card mb-2" id="singleCardSize">
					<div className="row g-0">
						<div className="col-md-5">
							<img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} className="img-fluid rounded-start" alt="..."/>
						</div>
						<div className="col-md-7">
							<div className="card-body">
								<h2 className="card-title text-center my-2">{character.properties.name}</h2>
								<p className="card-text text-center pt-4">Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
							</div>
						</div>
					</div>
					<div className="container-fluid" id="footer">
						<div className="row pt-3" id="characterInfo">
							<div className="col-2 text-center">
								<p className="strong">Name</p>
								<p>{character.properties.name}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Gender</p>
								<p>{character.properties.gender}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Birth year</p>
								<p>{character.properties.birth_year}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Hair color</p>
								<p>{character.properties.hair_color}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Eye color</p>
								<p>{character.properties.eye_color}</p>
							</div>
							<div className="col-2 text-center">
								<p className="strong">Mass</p>
								<p>{character.properties.mass}</p>
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

export default SingleCharacter
