import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import PageLogin from './components/api/login/login';
import Playlist from './components/api/index';

function App() {
	return (
		<>
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<PageLogin/>}/>
				<Route path="/playlist" element={<Playlist/>}/>
				<Route path="*" element={<ErrorPage/>}/>
			</Routes>
		</BrowserRouter>
		</>
	);
}

export default App;
