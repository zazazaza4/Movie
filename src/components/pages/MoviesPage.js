import MoviesList from "../moviesList/moviesList";

const MoviesPage = ({type}) => {
	return (
		<>
			<h2 className="movies__title">
				Movies
			</h2>
			<div className="search  _container"> 
          		<input type="text" placeholder="Search anything..."/>
            	<div className="search__button">
                	<button className="btn btn__search">Search</button>
           	 	</div>
        	</div>
			<MoviesList type={type}/> 
		</>
    )
} 

export default MoviesPage;