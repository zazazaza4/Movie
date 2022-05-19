import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useMoviesServise from '../../services/useMoviesService';
import MovieCard from '../movieCard/movieCard';
import setContext from '../../utils/setContext';

import "swiper/css";
import './slider.scss';

const Slider = ({type, title}) => {
	const [movies, setMovies] = useState(null);
	const {getMoviesList, setProcess, process} = useMoviesServise();

	const movieLoad = (data) => {
		setMovies(data);
		setProcess('confirmed')	
	}

	useEffect(() => {
		getMoviesList(type).then(movieLoad);
	}, []);

	return (
		<div className='slider _container'>
			<div className="slider__label">
				<h2 className="slider__title">
					{title}
				</h2>
				<Link to={`movies/${type}`} className="btn btn-white">View more</Link>
			</div>
			{setContext(process, View, movies)}				
		</div>
	)
}

const View = ({data}) => {
	return (
		<Swiper
				style={{position: 'relative'}}
				slidesPerView={'auto'}
				spaceBetween={10}
				pagination={{
				clickable: true,
				}}
				className="slider"
			>
	 	{
			data.map(i => {
				return <SwiperSlide key={i.id}> <MovieCard data={i}/> </SwiperSlide>
			})
		}
		</Swiper>
	)
}



export default Slider;