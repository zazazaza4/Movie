import { Link } from "react-router-dom";
import './movieCard.scss';

const movieCard = ({category, type, data}) => {
	const {id = 0, title = '', image = ''} = data;

	return (
		<div key={id} className="movie">
			<Link 
				to={`/${category}/${type}/${id}`} 
				style={{backgroundImage : `url(${image})`}}
			 	className="movie__link">
					<div className="play__button"></div>
			</Link>
			<div className="movie__text">{title}</div>
		</div>
	)
}

export default movieCard;