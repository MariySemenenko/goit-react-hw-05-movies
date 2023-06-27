import { getMovieReviews } from 'serviceApp/serviceApp';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useGetMovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesReviews(movieId);
  }, [movieId]);

  const moviesReviews = async movieId => {
    setIsLoading(true);
    try {
      const byMoviesReviews = await getMovieReviews(movieId);
      setReviews(byMoviesReviews);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { reviews, error, isLoading };
};
