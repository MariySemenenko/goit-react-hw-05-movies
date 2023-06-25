import { useEffect, useState } from "react";
import { getMovieCredits } from "serviceApp/serviceApp";
import { useParams } from "react-router-dom"; 

export const useGetMovieCredits = () => {

    const [credit, setCredit] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        moviesCredit(movieId)
        
    }, [movieId]);

    const moviesCredit = async (movieId) => {
        setIsLoading(true);
        try {
            const byCredit = await getMovieCredits(movieId);
            setCredit(byCredit);
            // console.log(byCredit)
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };
   
    return { credit, error, isLoading, };

}