import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const CharacterCard = (props) => {

	const [character, setCharacter] = useState('');
	const {store, actions} = useContext(Context);
	const navigate = useNavigate();

	useEffect(()=>{
		getCharacter()
	}, [])

	const getCharacter = ()=>{
		fetch('https://www.swapi.tech/api/people/' + props.character.uid, {
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
			setCharacter(data.result.properties);
		})
		.catch(error=>{
			console.log(error);
		})
	}
    return(			
		<div className="card my-5" id="cardSize">
			<img src={`https://starwars-visualguide.com/assets/img/characters/${props.character.uid}.jpg`} className="card-img-top" id="logo"/>
			<div className="card-body">
				<h5 className="card-title ms-1 text-center pb-4"><strong>{props.character.name}</strong></h5>
				<div className="card-text pb-2">						
					<p className="ms-2"><strong>Hair color:</strong> {character.hair_color}</p>
					<p className="ms-2"><strong>Eye color:</strong> {character.eye_color}</p>
					<p className="ms-2"><strong>Gender:</strong> {character.gender}</p>
				</div>
				<div className="d-grid gap-5 d-md-flex mb-1">
					<button className="btn btn-outline-primary" onClick={(() => navigate("details-character/" + props.character.uid))}>Learn more!</button>
					<button className="btn btn-outline-warning" onClick={()=>actions.addFavourites(props.character.name)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
							<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
    )
}

export default CharacterCard