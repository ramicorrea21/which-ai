const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tools : []
		},
		actions: {
			fetchTools : () =>{
				fetch(`${process.env.BACKEND_URL}/tools`)
				.then(res => res.json())
				.then(data => setStore({
					tools : data
				}))
			},
			getMatches : (category) =>{
				fetch(`${process.env.BACKEND_URL}/tools`)
				.then(res => res.json())
				.then(data => setStore({
					tools : data.filter((tool) => tool.category == category)
				}))
			},
			addTool: async(tool) =>{
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/addtool`, {
						method : 'POST',
						headers:{
							"Content-Type": "application/json"
						},
						body: JSON.stringify(tool)
					})
					return response
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
