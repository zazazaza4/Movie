import { lazy, Suspense } from 'react';
//react router
import { 
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import AppHeader from "../appHeader/appHeader";
import AppFooter from "../appFooter/appFooter";
import Spinner from "../spinner/spinner";
// import { 
//     HomePage, 
//     TvListPage,    
//     Page404, 
//     ListPage,
//     SingleMovieLayout, 
// } from "../pages";
import './app.scss';

const HomePage = lazy(() => import("../pages/HomePage"));
const ListPage = lazy(() => import("../pages/ListPage"));
const SingleMovieLayout = lazy(() => import("../pages/SingleMovieLayout/SingleMovieLayout"));
const Page404 =lazy(() => import("../pages/Page404"));

const App = () => {

    return (
        <Router>
            <div className="wrapper">
                <AppHeader/>
                <main className="main">
                   <Suspense fallback={<Spinner/>}>
                    <Routes>
                            <Route path='/' element={<HomePage/>}/>
                            <Route path='movie/' element={<ListPage type={"popular"} category={'movie'}/>}/>
                            <Route path='movie/popular/' element={<ListPage type={"popular"} category={'movie'}/>}/>
                            <Route path='movie/top_rated/' element={<ListPage type={"top_rated"} category={'movie'}/>}/>
                            <Route path='movie/popular/:id' element={<SingleMovieLayout type="popular" category={'movie'}/>}/>
                            <Route path='movie/top_rated/:id' element={<SingleMovieLayout type="top_rated" category={'movie'}/>}/>


                            <Route path='tv/' element={<ListPage type={"popular"} category={'tv'}/>}/>
                            <Route path='tv/popular/' element={<ListPage type={"popular"} category={'tv'}/>}/>
                            <Route path='tv/top_rated/' element={<ListPage type={"top_rated"} category={'tv'}/>}/>
                            <Route path='tv/popular/:id' element={<SingleMovieLayout type="popular" category={'tv'}/>}/>
                            <Route path='tv/top_rated/:id' element={<SingleMovieLayout type={"top_rated"} category={'tv'}/>}/>

                            <Route path='/*' element={<Page404/>}/>
                    </Routes>
                    </Suspense>
                </main>
                <AppFooter/>
            </div>
        </Router>
    ) 
}

export default App;