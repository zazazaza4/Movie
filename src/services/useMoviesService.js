import { useHttp } from "../hooks/http.hook";

const useMoviesServise = () => {
    const apiKey = '94f7bec1b91c0b7133e5fa7be293f498';
    const apiBase = 'https://api.themoviedb.org/';
    const baseImage = 'https://image.tmdb.org/t/p/w500/';
    const {process, setProcess, request, clearError} = useHttp();
    //top_rated || popular
    const getMoviesList = async (type = 'popular', page = 1, category = 'movie') => {
        const response = await request(`${apiBase}3/${category}/${type}?api_key=${apiKey}&language=en-US&page=${page}`);
        return response.results.map(transformMovie);
    }

    const getMovieById = async (id, type = 'popular', category = 'movie') => {
        const response = await request(`${apiBase}3/${category}/${id}?api_key=${apiKey}&language=en-US`);
        return transformMovieId(response);
    }

    const getMovieListBySearch = async (search = '', page = 1, category = 'movie') => {
        const response = await request(`${apiBase}3/${category}/search?api_key=${apiKey}&language=en-US&page=${page}&query=${search}`);
        return response.results.map(transformMovie);
    }

    const getMovieBySimilar = async (id, category = 'movie') => {
        const response = await request(`${apiBase}3/${category}/${id}/similar?api_key=${apiKey}&language=en-US&page=1`);
        return response.results.map(transformMovie);
    }

    const transformMovieId = ( movie ) => {
        const { 
            id, 
            title, 
            poster_path, 
            overview, 
            genres,
            homepage,
            vote_average,
            vote_count,
            backdrop_path,
            tagline,
            production_countries,
            release_date
        } = movie;

        return {
            id,
            title,
            overview,
            image: baseImage + poster_path,
            genres: genres.map( i => i.name),
            homepage,
            vote_average,
            vote_count,
            tagline,
            production_countries: production_countries.map( i => i.name),
            release_date,
            bg: baseImage + backdrop_path
        }
    }

    const transformMovie = ( movie ) => {
        const {id, title, poster_path, overview } = movie;
        return {
            id,
            title,
            overview: overview,
            image: baseImage + poster_path,
        }
    }

    return {
        process, 
        setProcess, 
        clearError,
        getMoviesList,
        getMovieById,
        getMovieBySimilar,
        getMovieListBySearch
    };
}

export default useMoviesServise;