import AppHeader from "../appHeader/appHeader";
import MoviesList from '../moviesList/moviesList';
import SliderCategories from '../sliderCategories/sliderCategories';
import RandomMovie from '../randomMovie/randomMovie';

import './app.scss';

const App = () => {
    return (
        <div className="wrapper">
            <AppHeader/>
            <main className="main">
                <MoviesList/>
                {/*<RandomMovie />
                <div>
                   <SliderCategories/> 
                </div>*/}
            </main>
        </div>
    ) 
}

export default App;