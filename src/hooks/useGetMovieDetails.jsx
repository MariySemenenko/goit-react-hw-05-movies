//отримую деталі фільму по Id

import { useEffect, useState } from "react";
import { getMovieDetails } from "serviceApp/serviceApp";
import { useParams } from "react-router-dom"; 
//використовую для from і повернення назад
import { useLocation } from "react-router-dom";
import { useRef } from 'react';

export const useGetMovieDetails = () => {

    const [movies, setMoviesId] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { movieId } = useParams();

    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/movies');

    useEffect(() => {
        setIsLoading(true);
        const moviesQueryId = async (movieId) => {
            try {
                const byQueryId = await getMovieDetails(movieId);
                setMoviesId(byQueryId);
               
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        moviesQueryId();
    }, [movieId]);
   
    return { movies, error, isLoading, location, backLinkHref };
    
};
//const backLinkHref = location.state?.from ?? "/products";
