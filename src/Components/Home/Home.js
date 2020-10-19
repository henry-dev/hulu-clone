import React, { useState, useEffect } from 'react';
import './Home.css';
import VideoCard from './VideoCard/VideoCard';
import axios from '../../axios';
import FlipMove from 'react-flip-move';

const Home = ({ selectedOption }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(selectedOption);
			setMovies(request.data.results);
			console.log(request);
			return request;
		}
		fetchData();
	}, [selectedOption]);
	return (
		<div className="home">
			<FlipMove>
				{movies.map((movie) => (
					<VideoCard key={movie.id} movie={movie} />
				))}
			</FlipMove>
		</div>
	);
};

export default Home;
