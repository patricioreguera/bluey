import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
	return (
		<nav>
			<div>
				<NavLink to="/" className="nav-item title">
					Home
				</NavLink>
				<NavLink to="/characters" className="nav-item title">
					Characters
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
