import { useEffect, useState } from "react";
import { getTrendingMovies } from "serviceApp/serviceApp";

export const useFetchTrending = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect (() => {
        setIsLoading(true);
        const getTrending = async () => {
            try {
             const movies = await getTrendingMovies();
             setMovies(movies)  
            } catch (error) {
                setError(error.message)   
            } finally {
                setIsLoading(false) 
            }
        } 
        getTrending();
    }, [])

return {movies, error, isLoading}
}