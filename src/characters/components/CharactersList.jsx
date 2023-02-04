import React from "react";
import { characters } from "../data/characters";
import CardCharacter from "./CardCharacter";
import "./charaterList.css";

const CharactersList = () => {
	return (
		<div className="list-container">
			{characters?.map((character) => (
				<CardCharacter key={character.id} character={character} />
			))}
		</div>
	);
};

export default CharactersList;
