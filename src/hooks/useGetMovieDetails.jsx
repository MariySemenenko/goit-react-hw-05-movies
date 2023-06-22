//отримую деталі фільму по Id

import { useEffect, useState } from "react";
import { getMovieDetails } from "serviceApp/serviceApp";
import { useParams } from "react-router-dom"; 
//використовую для from і повернення назад
// import { useLocation } from "react-router-dom";
// import { useRef } from 'react';

export const useGetMovieDetails = () => {

    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { movieId } = useParams();
// console.log(movieId)
    // const location = useLocation();
    // const backLinkHref = useRef(location.state?.from ?? '/movies');

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
//const backLinkHref = location.state?.from ?? "/products";
