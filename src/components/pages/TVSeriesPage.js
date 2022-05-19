import MoviesList from "../moviesList/moviesList";

const TVSeriesPage = () => {
	return (
		<>
			<h2 className="movies__title">
				TVSeriesPage
			</h2>
			<div className="search  _container"> 
          		<input type="text" placeholder="Search anything..."/>
            	<div className="search__button">
                	<button className="btn btn__search">Search</button>
           	 	</div>
        	</div>
		</>
    )
} 

export default TVSeriesPage;