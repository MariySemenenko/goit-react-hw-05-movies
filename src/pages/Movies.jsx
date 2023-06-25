//список фільмів на цій сторінці рендериться на сторінці MoviesList
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useMoviesByQuery } from 'hooks/useMoviesByQuery';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
//import PropTypes from 'prop-types';??


const Movies = () => {
  const [name, setName] = useState('');
  const [ searchParams, setSearchParams] = useSearchParams()
  const { movies, error, isLoading } = useMoviesByQuery();
  

  const handleChange = e => {
    setName(e.currentTarget.value.toLowerCase().trim());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!name) {
      return alert('Please enter query');
    }
    setSearchParams({query:name})//зчитую query з хука useMoviesByQuery 
  };



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="movie name"
          onChange={handleChange}
          autoFocus
        />

        <button disabled={!name} type='submit'>Search</button>
      </form>
      {isLoading && <Loader />}
{error && <p>Something went wrong</p>}
{movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
export default Movies;

