import MoviesListItem from '../moviesListItem/moviesListItem';

import './moviesList.scss';

const MoviesList = () => {
	return (
		<div className="movies">
			<h2 className="movies__title">
				Movies
			</h2>
			<div class="search  _container"> 
          	<input type="text" class="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search anything..."/>
            <div class="search__button">
                <button class="btn btn__search">Search</button>
            </div>
        </div>
			<ul className="movies__list  _container">
				<MoviesListItem/>	
				<MoviesListItem/>	
				<MoviesListItem/>	
				<MoviesListItem/>	
				<MoviesListItem/>	
				<MoviesListItem/>
				<MoviesListItem/>	
				<MoviesListItem/>	
			</ul>
			<button className='btn'>
				Load more
			</button>
		</div>
	)
}

export default MoviesList;