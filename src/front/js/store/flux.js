const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tools : []
		},
		actions: {
			fetchTools : () =>{
				const store = getStore()
				fetch(`${process.env.BACKEND_URL}/tools`)
				.then(res => res.json())
				.then(data => setStore({
					tools : data
				}))
			}
		}
	};
};

export default getState;
