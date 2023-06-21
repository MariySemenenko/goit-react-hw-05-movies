import { useEffect, useState } from "react";
import { getMovieCredits } from "serviceApp/serviceApp";
import { useParams } from "react-router-dom"; 

export const useGetMovieCredits = () => {

    const [credit, setCredit] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const moviesCredit = async (movieId) => {
            try {
                const byCredit = await getMovieCredits(movieId);
                setCredit(byCredit);
               
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        moviesCredit();
    }, [movieId]);
   
    return { credit, error, isLoading, };

}