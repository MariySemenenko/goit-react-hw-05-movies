import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useMoviesByQuery } from 'hooks/useMoviesByQuery';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const Movies = () => {
  const [name, setName] = useState('');
  const [ searchParams, setSearchParams] = useSearchParams()
  const { movies, error, isLoading } = useMoviesByQuery('time');
  

  const handleChange = e => {
    setName(e.currentTarget.value.toLowerCase().trim());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!name) {
      return alert('Please enter query');
    }
    setSearchParams({query:name})
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
      {error && <p>Ups</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
export default Movies;
