const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contactList: [

			],

			currentAgenda: "jean" || localStorage.getItem("agenda"),

			edit: []

		},


		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getAgenda: async () => {
				const store = getStore()

				const res = await fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${store.currentAgenda}`)
				const data = await res.json()
				console.log(data);
				setStore({ contactList: data })


			},

			createContact: async (contactName) => {
				const store = getStore()

				const res = await fetch(`https://playground.4geeks.com/apis/fake/contact/`, {
					method: 'POST',
					body: JSON.stringify({

						"full_name": contactName.fullName,
						"email": contactName.email,
						"agenda_slug": contactName.agendaName,
						"address": contactName.address,
						"phone": contactName.phone

					}),
					headers: {
						'Content-Type': 'application/json'
					},
				})
			},

			editContact: async (contact, id) => {
				const store = getStore()

				const res = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: 'PUT',
					body: JSON.stringify({

						"full_name": contact.fullName,
						"email": contact.email,
						"agenda_slug": contact.agendaName,
						"address": contact.address,
						"phone": contact.phone


					}),
					headers: {
						'Content-Type': 'application/json'
					},
				})

			},

			saveEdit: (id) => {
				const store = getStore()

				const contactToEdit = store.contactList.find((contact) => {
					return id === contact.id
				})
				setStore({ edit: contactToEdit })
			},

			saveCurrentAgenda: async (agenda) => {
				const store = getStore()
				setStore({ ...store, currentAgenda: agenda })
			},



			deleteAllContact: async () => {
				const store = getStore()

				const res = await fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${store.currentAgenda}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					},
				},)
				setStore({ contactList: [] })

			},

			deleteOneContact: async (contact) => {
				const store = getStore()

				const contactFiltered = store.contactList.filter(item => item != contact)

				const res = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contact.id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					},
				},)
				console.log(contactFiltered);
				setStore({ contactList: contactFiltered })
			},







			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
