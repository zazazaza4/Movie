import {useState, useEffect, useMemo } from 'react';

import {
  useLocation
} from "react-router-dom";


import Spinner from "../spinner/spinner";
import ErrorMessage from '../errorMessage/errorMessage';

import MovieCard from '../movieCard/movieCard'
import useMoviesServise from "../../services/useMoviesService";

import './itemsList.scss';

const setContext = (process, Component, data, newItemLoading) => {
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

const ItemsList = ({type, category}) => {
	const [movies, setMovies] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState();
	const [page, setPage] = useState(null);
	const [movieEnded, setMovieEnded] = useState(false);
	const location = useLocation();

	const {getMoviesList, setProcess, process} = useMoviesServise();

	const movieLoad = (newMovie) => {
		let ended = false;
		if (newMovie.length < 20) {
			ended = true;
		}
		console.log('movies');
		setMovies(movies => [...movies, ...newMovie]);
		setNewItemLoading(newItemLoading => false);
		setPage(page => page + 1);
		setMovieEnded(movieEnded => ended);
	}

	const onRequest = (page, intial) => {
		intial ? setNewItemLoading(false) : setNewItemLoading(true);
		console.log(page);
		getMoviesList(type, page , category)
		.then(movieLoad)
		.then(() => setProcess('confirmed'));
	}

	useEffect(() => {
		setMovies([]);
		setPage(1);
		onRequest(page, true);
		// eslint-disable-next-line
	}, [type, category, location.pathname]);

	const renderMovies = () => {
		return (movies.map(i => <MovieCard category={category} type={type} data={i}/>))
	}

	const elements = useMemo( () =>  setContext(process, () => renderMovies(), newItemLoading)// eslint-disable-next-line, [process]);

	return (
		<div className="movies">
			<ul className="movies__list  _container">
				{elements}
			</ul>
			<button
				disabled={movieEnded}
				onClick={() => onRequest(page)}
				style={{ 'display': movieEnded ? 'none' : '' }} 
				className='btn'>
					Load more
			</button>
		</div>
	)
}

export default ItemsList;