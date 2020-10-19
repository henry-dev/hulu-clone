import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import requests from './requests';

function App() {
	const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
	return (
		<div className="app">
			<Header />
			<Nav setSelectedOption={setSelectedOption} />
			<Home selectedOption={selectedOption} />
		</div>
	);
}

export default App;
