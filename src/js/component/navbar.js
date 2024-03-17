import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-success mx-3">Add a new Contact</button>
				</Link>
				<button className="btn btn-danger"
					onClick={() => actions.deleteAllContact()}
				>Clear all Agenda</button>
			</div>

		</nav>
	);
};
