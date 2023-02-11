import React, { useEffect, useState } from "react";
import { charactersMock } from "../data/charactersMock";
import CardCharacter from "./CardCharacter";
import "./charaterList.css";
import { useLocation } from "react-router-dom";
const CharactersList = ({ maxList }) => {
	const { pathname } = useLocation();
	const [characters, setcharacters] = useState(charactersMock);
	const [loadMore, setLoadMore] = useState(6);
	const [input, setInput] = useState("");

	const characterListCopy = characters?.map((character) => (
		<CardCharacter key={character.id} character={character} />
	));

	const incrementCharacters = () => {
		if (characterListCopy.length > loadMore) {
			setLoadMore((loadMore) => loadMore + 4);
		}
	};

	const handleInput = (event) => {
		if (event.key === "Enter") {
			handleSearch();
		}
		setInput(event.target.value);
	};

	const handleSearch = () => {
		if (input.length > 0) {
			setcharacters(
				characters.filter((character) =>
					character.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
				)
			);
		}
	};
	const handleDelete = () => {
		setcharacters(charactersMock);
		setInput("");
	};
	useEffect(() => {
		setcharacters(charactersMock.slice(0, maxList));
	}, []);

	useEffect(() => {
		if (input.length <= 0) {
			setcharacters(charactersMock.slice(0, maxList));
		}
	}, [input]);

	return (
		<div className="list-container">
			{pathname === "/characters" && (
				<div className="search">
					<input
						onChange={handleInput}
						onKeyUp={handleInput}
						className="input-search"
						placeholder="search character"
						value={input}
					></input>
					<button className="card-button-inverted" onClick={handleSearch}>
						Search
					</button>
					<button className="card-button-inverted" onClick={handleDelete}>
						Delete
					</button>
				</div>
			)}
			<div className="characters-list">
				{characterListCopy.length > 0 ? (
					characterListCopy.slice(0, loadMore)
				) : (
					<h1 className="no-results title">No results</h1>
				)}
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
