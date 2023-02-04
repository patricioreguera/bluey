import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { characters } from "../data/characters";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Character.css";

const Character = () => {
	const { name } = useParams();
	const navigate = useNavigate();
	const onNavigateBack = () => {
		navigate(-1);
	};
	const character = characters.find((character) => character.name === name);
	// =====> back to the characters if dont match
	if (!character) {
		console.log(character);

		return <Navigate to="/characters" />;
	}

	return (
		<>
			<div className="top-container">
				<LazyLoadImage
					src={character.image}
					alt={characters.name}
					className="character-img"
				/>
				<div className="description-container">
					<h1 className="title"> {character.name}</h1>
					<p>{character.description}</p>
					<button onClick={onNavigateBack} className="card-button">
						back
					</button>
				</div>
			</div>
			{/* <div className="container-suggestions">
				<h5>mas sugerencias</h5>
			</div> */}
		</>
	);
};

export default Character;
