import {useRef, useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import images from './images';

import './sliderCategory.scss';

const SliderCategory = () => {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect( () => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<div className='carousel'>
			<div className="carousel__label">
				<h2 className="carousel__title">
					Trending movies
				</h2>
				<button className="btn btn-white">View more</button>
			</div>
			<motion.div ref={carousel} className="carousel__wrapper" whiletop={{cursor:'grabbing'}}>
				<motion.div drag="x" dragConstraints={{right: 0, left: -width}} className='carousel__inner'>
					{images.map( (image, i) => {
						return (
							<motion.div className="carousel__item" key={i}>
								<a href="#">
									<img src={image} alt='alt'/>
									<div className="play__button_outer">
										<div className="play__button"></div>
									</div>
									<div className="carousel__text">dldlkasdasldka</div>
								</a>
							</motion.div>
						)
					})}
				</motion.div>
			</motion.div>
		</div>
	)
}

export default SliderCategory;