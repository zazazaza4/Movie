import SliderCategory from '../sliderCategory/sliderCategory'; 

import './sliderCategories.scss'

const SliderCategories = () => {
	return ( 
		<div className="sliders _container">
			<SliderCategory/>
			<SliderCategory/>
			<SliderCategory/>
		</div>
	)
}

export default SliderCategories;