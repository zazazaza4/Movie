import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import useMoviesServise from "../../services/useMoviesService";
import setContext from '../../utils/setContext';

import './randomMovie.scss';

const RandomMovie = () => {
	const [movies, setMovies] = useState(null);
	const {getMovieById, setProcess, process} = useMoviesServise();

	const movieLoad = (data) => {
		setMovies(data);
		setProcess('confirmed')	
	}

	useEffect(() => {
		const id = Math.floor(Math.random() * 1000);
		getMovieById(id).then((data) => movieLoad(data));
		setInterval( () => {

		}, 15000);

		return clearInterval()
		// eslint-disable-next-line
	}, []);
	
	return (
		<div className='random'>
			{setContext(process, View, movies)}
		</div>
	)
}

const View = (data) => {
	const {id = 10, title = 'Something went wrong', image = '', overview = 'We`ll fix it soon'} = data.data;

	return (
		<>
		<div className="random__bg" style={{backgroundImage : `url(${image})`}}></div>
			<div className="random__body _container">
				<div className="random__text">
					<div className="title random__title">
						{title}
					</div>
					<div className='random__descr'>
						{overview}
					</div>
					<Link to={`/movie/popular/${id}`} className="btn">Watch now</Link>
				</div>	
			</div>
		</>
	)
}

export default RandomMovie;