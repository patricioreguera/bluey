import React from "react";
import Navbar from "../../ui/components/Navbar";
import CharactersList from "../components/CharactersList";

const BlueyCharacters = () => {
	return (
		<div>
			<div className="top-container-main"></div>
			<Navbar />
			<CharactersList />
		</div>
	);
};

export default BlueyCharacters;
