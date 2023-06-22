import { useEffect, useState } from "react";
import { getMoviesByQuery } from "serviceApp/serviceApp";



export const useMoviesByQuery = (query) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const moviesQuery = async () => {
            try {
                const data = await getMoviesByQuery(query);
                setMovies(data);
               
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        moviesQuery();
    }, [query]);
   
    return { movies, error, isLoading };
    
};