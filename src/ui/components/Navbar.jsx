import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/assets/logo-black.svg";
import "./Navbar.css";
const Navbar = () => {
	return (
		<nav>
			<div className="navbar-container">
				<NavLink to="/">
					<img src={logo} alt="logo" className="logo-navbar" />
				</NavLink>
				<div>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "nav-item-active title" : "nav-item title"
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/characters"
						className={({ isActive }) =>
							isActive ? "nav-item-active title" : "nav-item title"
						}
					>
						Characters
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
