import React from "react";

import CharactersList from "../characters/components/CharactersList";
import Navbar from "../ui/components/Navbar";

const BlueyPage = () => {
	return (
		<div className="main-container">
			<div className="top-container-main"></div>
			<Navbar />
			<div className="middle-container">
				<CharactersList maxList={4} />
			</div>
		</div>
	);
};

export default BlueyPage;
