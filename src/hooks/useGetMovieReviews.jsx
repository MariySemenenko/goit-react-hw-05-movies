import { getMovieReviews } from "serviceApp/serviceApp";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useGetMovieReviews = () => {

    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const moviesReviews = async (movieId) => {
            try {
                const byMoviesReviews = await getMovieReviews(movieId);
                setReviews(byMoviesReviews);
               
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        moviesReviews();
    }, [movieId]);
   
    return { reviews, error, isLoading,  };
    
};

