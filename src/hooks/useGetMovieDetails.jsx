//отримую деталі одного фільму для сторінки pages/MovieDetails

import { useEffect, useState } from "react";
import { getMovieDetails } from "serviceApp/serviceApp";
import { useParams } from "react-router-dom"; 

export const useGetMovieDetails = () => {

    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { movieId } = useParams();


    useEffect(() => { 
        movieDetails(movieId);
    }, [movieId]);
   
    const movieDetails = async (movieId) => {
        
        setIsLoading(true);
        try {
            const data = await getMovieDetails(movieId);
            setMovie(data);
           
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { movie, error, isLoading };
    
};

