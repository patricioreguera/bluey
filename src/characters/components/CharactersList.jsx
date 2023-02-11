import React, { useEffect, useState } from "react";
import { charactersMock } from "../data/charactersMock";
import CardCharacter from "./CardCharacter";
import "./charaterList.css";
import { useLocation } from "react-router-dom";
const CharactersList = ({ maxList }) => {
	const { pathname } = useLocation();
	const [characters, setcharacters] = useState(charactersMock);
	const [loadMore, setLoadMore] = useState(8);

	const characterListCopy = characters?.map((character) => (
		<CardCharacter key={character.id} character={character} />
	));

	const incrementCharacters = () => {
		if (characterListCopy.length > loadMore) {
			setLoadMore((loadMore) => loadMore + 4);
		}
	};
	useEffect(() => {
		setcharacters(charactersMock.slice(0, maxList));
	}, []);
	return (
		<div className="list-container">
			<div className="characters-list">
				{characterListCopy.slice(0, loadMore)}
			</div>
			<div>
				{(pathname === "/characters") &
				(loadMore < characterListCopy.length) ? (
					<button
						onClick={incrementCharacters}
						className="card-button-inverted"
					>
						Load more
					</button>
				) : null}
			</div>
		</div>
	);
};

export default CharactersList;
