import image from '../../assets/image.jpg';
import { Link } from "react-router-dom";
import './movieCard.scss';
import imgTest from '../../assets/image.jpg';

const movieCard = ({data}) => {
	const {id = 0, title = '', image = imgTest} = data;
	return (
		<div key={id} className="movie">
			<Link 
				to={`movies/${id}`} 
				style={{backgroundImage : `url(${image})`}}
			 	className="movie__link">
					<div className="play__button"></div>
			</Link>
			<div className="movie__text">{title}</div>
		</div>
	)
}

export default movieCard;