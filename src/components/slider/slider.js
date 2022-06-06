import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useMoviesServise from '../../services/useMoviesService';
import MovieCard from '../movieCard/movieCard';
import setContext from '../../utils/setContext';

import "swiper/css";
import './slider.scss';

const Slider = ({type, title, category, similar = false, id = 0}) => {
	const [items, setItems] = useState(null);
	const {getMoviesList, getMovieBySimilar, setProcess, process} = useMoviesServise();

	const itemsLoad = (data) => {
		setItems(data);
		setProcess('confirmed')	
	}

	useEffect(() => {
		if (similar) {
			getMovieBySimilar(id, category).then(itemsLoad);;
		} else {
			getMoviesList(type, 1, category).then(itemsLoad);
		}
		// eslint-disable-next-line
	}, []);

	return (
		<div className='slider _container'>
			{!similar ? 
				<div className="slider__label">
					<h2 className="slider__title title">
						{title}
					</h2>
					<Link to={`${category}/${type}`} className="btn btn-white">View more</Link>
				</div> 
				: null}
			{setContext(process, View, items, type, category)}				
		</div>
	)
}

const View = ({data, type, category}) => {
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
				return <SwiperSlide key={i.id}> <MovieCard data={i} type={type} category={category}/> </SwiperSlide>
			})
		}
		</Swiper>
	)
}



export default Slider;