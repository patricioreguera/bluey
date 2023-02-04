import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "./cardCharacter.css";

const CardCharacter = ({ character }) => {
	const characterImageUrl = `/assets/${character.image}`;
	return (
		<div className="card-container">
			<LazyLoadImage src={characterImageUrl} className="card-img" />
			<h1 className="title cardTitle">{character.name}</h1>
			<p>{character.description.slice(0, 70)}...</p>

			<Link to={`/characters/${character.name}`} className="card-button">
				More..
			</Link>
		</div>
	);
};

export default CardCharacter;
