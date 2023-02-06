import React from "react";
import logo from "/assets/logo.svg";
import CharactersList from "../characters/components/CharactersList";

const BlueyPage = () => {
	return (
		<div className="main-container">
			<div className="top-container-main">
				<img src={logo} alt="logo" className="logo" />
			</div>
			<div className="middle-container">
				<CharactersList maxList={4} />
			</div>
		</div>
	);
};

export default BlueyPage;
