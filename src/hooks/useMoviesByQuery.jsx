import { useEffect, useState } from "react";
import { getMoviesByQuery } from "serviceApp/serviceApp";
//import { useParams } from "react-router-dom"; ??


export const useMoviesByQuery = (query) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const moviesQuery = async () => {
            try {
                const byQuery = await getMoviesByQuery(query);
                setMovies(byQuery);
               
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        moviesQuery();
    }, [query]);
    console.log(movies)
    return { movies, error, isLoading };
    
};