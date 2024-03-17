import React from "react";
import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";


export const Home = () => {

	const { store, actions } = useContext(Context)

	const [agenda, setAgenda] = useState(store.currentAgenda)


	const deleteContact = (contact) => {
		actions.deleteOneContact(contact)
	}

	const handlerGetAgenda = (evt) => {
		localStorage.setItem("agenda", evt.target.value)
		setAgenda(evt.target.value)

	}

	
	useEffect(() => {
		const loadingData = async () => {
	
			try {
				res = await	actions.getAgenda()
				res2 = await actions.saveCurrentAgenda(agenda)
			} catch (error) {
				console.log(error);
			}

		}
		 loadingData()
	}, [])





	  const listData = store.contactList.map((contact, index) => {

		return (
			<div key={index} className="container border border-dark-subtle w-50  ">
				<div className=" d-flex p-3" >
					<div>
						<img className="img-fluid rounded-circle tamaño" src="https://cdn-icons-png.flaticon.com/512/3577/3577429.png" alt="" />
					</div>
					<div className="d-flex justify-content-between">
						<div className="me-5 pe-5 ms-2">
							<h5 className="mx-2">{contact.full_name}</h5>
							<p className="text-secondary">📍{contact.address}</p>
							<p className="text-secondary">📞{contact.phone}</p>
							<p className="text-secondary">✉️{contact.email}</p>
						</div>
						<div className="d-flex justify-content-between gap-5 ms-5">

							<button className="btn-styles" onClick={() => actions.saveEdit(contact.id)}>
								<Link to={"/EditContact/" + contact.id}>
									<span className="ms-5">✏️</span>
								</Link>

							</button>

							<span type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
								🗑️
							</span>

							<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h1 class="modal-title fs-5" id="exampleModalLabel">Are u Sure?</h1>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
											this contact will be deleted
										</div>
										<div class="modal-footer">
											<button onClick={() => deleteContact(contact)} type="button" class="btn btn-primary" data-bs-dismiss="modal">Yes</button>
											<button data-bs-dismiss="modal" type="button" class="btn btn-secondary">No</button>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		)

	})

	return <>
		<Navbar />
		<div className="d-flex justify-content-center mb-5">
			<input
				onChange={handlerGetAgenda}
				value={agenda}
				placeholder="Introduce una agenda"
			/>
		</div>


		<div>
			{listData}
			<h1 className="text-center ">{store.contactList.length === 0 ? "No hay contactos... " : ""}</h1>

		</div>
	</>
};
export default Home;