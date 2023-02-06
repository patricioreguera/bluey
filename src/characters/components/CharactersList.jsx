import React, { useEffect, useState } from "react";
import { charactersMock } from "../data/charactersMock";
import CardCharacter from "./CardCharacter";
import "./charaterList.css";

const CharactersList = ({ maxList }) => {
	const [characters, setcharacters] = useState(charactersMock);
	useEffect(() => {
		setcharacters(charactersMock.slice(0, maxList));
	}, []);
	return (
		<div className="list-container">
			{characters?.map((character) => (
				<CardCharacter key={character.id} character={character} />
			))}
		</div>
	);
};

export default CharactersList;
