import React from 'react';
import {useNavigate} from "react-router-dom"

const Home = () => {
const navigate = useNavigate();
	
return (
	<>
		<h1 style={{color:"green"}}>Login Disini</h1>
		<button onClick={()=>navigate("/playlist")}>Login</button>
	</>
)
};

export default Home;
