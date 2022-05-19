import { 
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import AppHeader from "../appHeader/appHeader";
import AppFooter from "../appFooter/appFooter";
import { HomePage, MoviesPage, TVSeriesPage } from "../pages";


import './app.scss';

const App = () => {
    return (
        <Router>
            <div className="wrapper">
                <AppHeader/>
                <main className="main">
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='movies/popular' element={<MoviesPage type="popular"/>}/>
                        <Route path='movies/top_rated' element={<MoviesPage type="top_rated"/>}/>
                        <Route path='tv-series' element={<MoviesPage/>}/>
                        <Route path='/*' element={<div>eslfksdkladalkdkadlka</div>}/>
                    </Routes>
                </main>
                <AppFooter/>
            </div>
        </Router>
    ) 
}

export default App;