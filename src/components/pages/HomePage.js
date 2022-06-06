import {Helmet} from "react-helmet";
import RandomMovie from '../randomMovie/randomMovie';
import Slider from '../slider/slider';

const HomePage = () => {
	return (
		<>
			<Helmet>
		       <title>Home | Movie-k Offical Site</title>
		       <meta 
		       	name="description" 
		       	content="Watch movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more." />
		   </Helmet>
			<RandomMovie/>
			<Slider title='Trending movies' type='popular' category='movie'/>
			<Slider title='Rated movies' type='top_rated' category='movie'/>
			<Slider title='Trending TV shows' type='popular' category='tv'/>
			<Slider title='Rated TV shows' type='top_rated' category='tv'/>
		</>
	)
} 

export default HomePage;