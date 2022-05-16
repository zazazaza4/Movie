import image from '../../assets/image.jpg';
import './moviesListItem.scss';

const moviesListItem = () => {
	return (
		<li className="movie">
			<a href="#">
				<img src={image} alt='alt'/>
				<div className="play__button_outer">
					<div className="play__button"></div>
				</div>
				<div className="carousel__text">dldlkasdasldka</div>
			</a>
		</li>
	)
}

export default moviesListItem;