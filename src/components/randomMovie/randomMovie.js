import './randomMovie.scss';

const RandomMovie = () => {
	return (
		<div className='random'>
			<div className="random__body _container">
				<div className="random__text">
					<div className="random__title">
						Movie
					</div>
					<div className='random__descr'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th
					</div>
				</div>	
				<button className="btn">Read more</button>
			</div>
		</div>
	)
}

export default RandomMovie;