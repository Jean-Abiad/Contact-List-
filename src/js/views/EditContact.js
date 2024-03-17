import React from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";



const EditContact = () => {
  const { store, actions } = useContext(Context)
  const [contact, setContact] = useState({
    
        fullName: store.edit ? store.edit.full_name : "",
        email: store.edit ? store.edit.email : "",
        agendaName: store.currentAgenda,
        address: store.edit ? store.edit.address : "",
        phone: store.edit ? store.edit.phone : ""
    })
  
  const navigate = useNavigate()
  const {id} = useParams()
  
  const updateContact = (evt) => {
    evt.preventDefault()
    actions.editContact(contact, id)
    navigate("/")
  }



  return <>
    <h1 className='mt-3 d-flex justify-content-center'>Edit your Contact!</h1>

    <div className="mb-3 row mx-5">

      <div className="col-12">
        <form className="row g-3 needs-validation" novalidate>
          <div className="col-12">
            <label for="validationCustomUsername" className="form-label">Full Name</label>
            <div className="input-group has-validation">
              <input type="text" className="form-control" 

              onChange={(e) => setContact({ ...contact, fullName: e.target.value })}

              value={contact.fullName}

              id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div className="invalid-feedback">
                Please choose a Name.
              </div>
            </div>
          </div>

          <div className="col-12">
            <label for="validationCustom01" className="form-label">Email</label>
            <input onChange={(e) => setContact({ ...contact, email: e.target.value })} 

            value={contact.email}

            type="text" className="form-control" id="validationCustom01" required />
            <div className="valid-feedback">
              Please choose a Email
            </div>
          </div>


          <div className="col-12">
            <label for="validationCustomUsername" className="form-label">Phone</label>
            <div className="input-group has-validation">
              <input onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              value={contact.phone}

               type="number" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div className="invalid-feedback">
                Please put a Phone number .
              </div>
            </div>
          </div>


          <div className="col-12">
            <label for="validationCustom03" className="form-label">Address</label>
            <input onChange={(e) => setContact({ ...contact, address: e.target.value })} 
            value={contact.address}

            type="text" className="form-control" id="validationCustom03" required />
            <div className="invalid-feedback">
              Please provide a valid Address.
            </div>
          </div>


          <div className="col-12">
            <button 
            onClick={updateContact}
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
}

export default EditContact