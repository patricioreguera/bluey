import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { charactersMock } from "../data/charactersMock";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CardCharacter from "../components/CardCharacter";
import "./Character.css";

const Character = () => {
	const { name } = useParams();
	const navigate = useNavigate();

	//navegate to the back page
	const onNavigateBack = () => {
		window.scrollTo(0, 0);
		navigate("/characters");
	};
	const character = charactersMock.find((character) => character.name === name);
	const characterSuggestion = charactersMock.filter(
		(character) => character.name !== name
	);
	const randomNumber =
		Math.floor(Math.random() * (charactersMock.length - 4 - 1 + 1)) + 1;
	//Math.floor(Math.random() * (maximum – minimum + 1)) + minimum
	characterSuggestion.slice(randomNumber, randomNumber + 3);
	// =====> back to the characters if dont match
	if (!character) {
		console.log(character);

		return <Navigate to="/characters" />;
	}
	// scroll page to top every time character name change
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [name]);

	return (
		<>
			<div className="top-container">
				<LazyLoadImage
					src={`/assets/${character.image}`}
					alt={character.name}
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
			<div className="container-suggestions">
				{characterSuggestion
					.slice(randomNumber, randomNumber + 3)
					.map((suggestion) => (
						<CardCharacter key={suggestion.id} character={suggestion} />
					))}
			</div>
		</>
	);
};

export default Character;
