import { useEffect, useState } from 'react';
import { getMoviesByQuery } from 'serviceApp/serviceApp';
import { useSearchParams } from 'react-router-dom';

export const useMoviesByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    setIsLoading(true);
    const moviesQuery = async () => {
      try {
        if (!query) return;
        const data = await getMoviesByQuery(query);

        if (data.length === 0) {
          return alert('We not find movies');
        }
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    moviesQuery();
  }, [query]);

  return { movies, error, isLoading, setSearchParams };
};
