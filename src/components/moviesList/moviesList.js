import {useState, useEffect, useMemo} from 'react';
import Spinner from "../spinner/spinner";
import ErrorMessage from '../errorMessage/errorMessage';

import { Link } from "react-router-dom";
import MovieCard from '../movieCard/movieCard'
import useMoviesServise from "../../services/useMoviesService";

import './moviesList.scss';

const setContext = (process, Component, data,newItemLoading) => {
	switch (process) {
		case 'waiting':
			return  <Spinner />;
		case 'loading':
			return  newItemLoading ? <Component/> : <Spinner />;
		case 'error':
			return <ErrorMessage />;
		case 'confirmed':
			return <Component/>
		default:
			throw new Error(`Unexpected process state => ${process}`);
	}
}

const MoviesList = ({type}) => {
	const [movies, setMovies] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [movieEnded, setMovieEnded] = useState(false);

	const {getMoviesList, setProcess, process} = useMoviesServise();

	const movieLoad = (newMovie) => {
		let ended = false;
		// if (newMovie.length < 40) {
		// 	ended = true;
		// }
		setMovies(movies => [...movies, ...newMovie]);
		setNewItemLoading(newItemLoading => false);
		setPage(page => page + 1);
		setMovieEnded(movieEnded => ended);
	}

	const onRequest = (page, intial) => {
		intial ? setNewItemLoading(false) : setNewItemLoading(true);
		getMoviesList(type, page)
		.then(movieLoad)
		.then(() => setProcess('confirmed'));
	}

	useEffect(() => {
		onRequest(page, true);
	}, []);

	const renderMovies = () => {
		return (movies.map(i => <MovieCard data={i}/>))
	}

	const elements = useMemo( () => {
		return setContext(process, () => renderMovies(), newItemLoading)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [process]);

	return (
		<div className="movies">
			<ul className="movies__list  _container">
				{elements}
			</ul>
			<button
				disabled={newItemLoading}
				onClick={() => onRequest(page)}
				style={{ 'display': false ? 'none' : '' }} 
				className='btn'>
					Load more
			</button>
		</div>
	)
}

export default MoviesList;