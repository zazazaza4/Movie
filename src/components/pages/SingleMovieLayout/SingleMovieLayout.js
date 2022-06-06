import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import {Helmet} from "react-helmet";
import Slider from '../../slider/slider';
import useMoviesServise from "../../../services/useMoviesService";
import setContext from '../../../utils/setContext';

import './SingleMovieLayout.scss';

const SingleMovieLayout = ({type, category}) => {
	const {id} = useParams();
	const [movies, setMovies] = useState(null);
	const {getMovieById, setProcess, process} = useMoviesServise();

	const movieLoad = (data) => {
		setMovies(data);
		setProcess('confirmed');	
	}

	useEffect( () => {
		getMovieById(id, type, category).then((data) => movieLoad(data));
	}, [id, type]);

	return (
		<>
			{setContext(process, View, movies, type, category)}
		</>
	)
}

const View = ({data, type, category}) => {
	const {	
		id = 10, 
		title = 'Something went wrong', 
		image = '', 
		overview = 'We`ll fix it soon', 
		genres = [],
		homepage = 'No data',
      vote_average = 'No data',
      vote_count,
      bg = '',
	   tagline = 'No data',
	   production_countries,
	   release_date = 'No data'
	} = data;

	return (
		<>
			<Helmet>
		       <title>{title} | Movie-k Offical Site</title>
		       <meta 
		       	name="description" 
		       	content={overview} />
		   </Helmet>
			<img className='single__bg' src={bg} alt="image"/>
			<section className="single"> 
				<div className="single__body _container">
					<img className='single__img' src={image} alt="image"/>
					<div className="single__text">
						<h3 className='single__title'>
							{title}
						</h3>
						<ul className="single__genres">
							{
								genres.map((item,index) => {
									return (
										<li key={index} className="single__genre">
											{item}
										</li>
									)
								})
							}
						</ul>
						<ul className='single__post'>
							<li><span>Rating:</span> {vote_average} ({vote_count})</li>
							<li><span>Homepage:</span>  <a href={homepage}>Visit</a></li>
							<li><span>Tagline:</span> {tagline}</li>
							<li><span>Countries:</span> {production_countries.join(', ')}</li>
							<li><span>Release:</span> {release_date}</li>
						</ul>
						<p className='single__descr'>
							<h3 className='single__title'>
								Description
							</h3>
							{overview}
						</p>
					</div>
				</div>
			</section>
			<Slider similar={true} id={id} type={type} category={category}/>
		</>
	)
}


export default SingleMovieLayout;