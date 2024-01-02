import React, { useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import Search from "../component/search";
import Loader from "../component/loader";

export const Home = () => {
const [loading, setLoading] = useState(true)
const { actions} = useContext(Context)

const load = () =>{
	setTimeout(() => {
		setLoading(false)
	}, 1000);
}

useEffect(() =>{
	actions.fetchTools()
	load()
}, [])

	return (
		<>
		{loading? <Loader/>: 
		<div className="text-center container-fluid main">
		<div>
		<h1>Which Ai are you looking for?</h1>	
		<p className="fs-5">Search any category or tool</p>
		<Search/>
		</div>
	</div>
		}
		</>
	);
};
