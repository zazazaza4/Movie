import { useHttp } from "../hooks/http.hook";

const useMoviesServise = () => {
    const apiKey = '94f7bec1b91c0b7133e5fa7be293f498';
    const apiBase = 'https://api.themoviedb.org/';
    const baseImage = 'https://image.tmdb.org/t/p/w500/';
    const {process, setProcess, request, clearError} = useHttp();
    //top_rated || popular
    const getMoviesList = async (type = 'popular', page = 1) => {
        const response = await request(`${apiBase}3/movie/${type}?api_key=${apiKey}&language=en-US&page=${page}`);
        return response.results.map(transformMovie);
    }

    const getMovieById = async (id) => {
        const response = await request(`${apiBase}3/movie/${id}?api_key=${apiKey}&language=en-US`);
        return transformMovie(response);
    }

    const getMovieBySimilar = async (id) => {
        const response = await request(`${apiBase}3/movie/12/similar?api_key=${apiKey}&language=en-US`);
        return transformMovie(response);
    }

    // const transformMovies = ( movie ) => {
    //     const {results} = movie;

    //     return {
    //         page,
    //         results,
    //         image: baseImage + results,
    //         id
    //     }
    // }

    const transformMovie = ( movie ) => {
        const {id, title, poster_path, overview} = movie;
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
        getMovieBySimilar
    };
}

export default useMoviesServise;