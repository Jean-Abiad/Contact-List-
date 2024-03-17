import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({agendaName: store.currentAgenda });

	// let navigate = Navigate()

	const addContact = (evt) => {
		evt.preventDefault()
		console.log(contact);
		actions.createContact(contact)
		// navigate("/")
		
	}

	return <>
		<h1 className='mt-4 d-flex justify-content-center'>Add a New Contact!</h1>

		<div className="mb-3 row mx-5">

			<div className="col-12">
				<form className="row g-3 needs-validation" novalidate>
					
					<div className="col-12">
						<label for="validationCustomUsername" className="form-label">Full Name</label>
						<div className="input-group has-validation">

							<input type="text" onChange={(e) => setContact({ ...contact, fullName: e.target.value })} className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />

							<div className="invalid-feedback">
								Please choose a Name.
							</div>
						</div>
					</div>

					<div className="col-12">
						<label for="validationCustom01" className="form-label">Email</label>
						<input type="text" onChange={(e) => setContact({ ...contact, email: e.target.value })} className="form-control" id="validationCustom01" required />
						<div className="valid-feedback">
							Please choose a Email
						</div>
					</div>


					<div className="col-12">
						<label for="validationCustomUsername" className="form-label">Phone</label>
						<div className="input-group has-validation">
							<input type="number" onChange={(e) => setContact({ ...contact, phone: e.target.value })} className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
							<div className="invalid-feedback">
								Please put a Phone number .
							</div>
						</div>
					</div>


					<div className="col-12">
						<label for="validationCustom03" className="form-label">Address</label>
						<input type="text" onChange={(e) => setContact({ ...contact, address: e.target.value })} className="form-control" id="validationCustom03" required />
						<div className="invalid-feedback">
							Please provide a valid Address.
						</div>
					</div>


					<div className="col-12">
						<button
							onClick={addContact}
							className="btn btn-primary w-100" type="submit">Save</button>
					
					</div>
					<Link to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							Back home
						</span>
					</Link>

				</form>
			</div>
		</div>

	</>
};
