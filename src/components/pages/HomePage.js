import { useEffect } from 'react';
import RandomMovie from '../randomMovie/randomMovie';
import Slider from '../slider/slider';

const HomePage = () => {

	return (
		<>
			<RandomMovie/>
			<Slider title={'Trending movies'} type='popular'/>
			<Slider title={'Rated movies'} type='top_rated'/>
		</>
	)
} 

export default HomePage;