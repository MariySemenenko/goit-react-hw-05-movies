//список фільмів на цій сторінці рендериться на сторінці MoviesList
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useMoviesByQuery } from 'hooks/useMoviesByQuery';
import { useState } from 'react';
import { Form, Input, Button } from './Movies.styled';

//import PropTypes from 'prop-types';??

const Movies = () => {
  const [name, setName] = useState('');

  const { movies, error, isLoading, setSearchParams } = useMoviesByQuery();

  const handleChange = e => {
    setName(e.currentTarget.value.toLowerCase().trim());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!name) {
      return alert('Please enter query');
    }
    setSearchParams(name !== '' ? { query: name } : {}); //зчитую query з хука useMoviesByQuery
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          placeholder="movie name"
          onChange={handleChange}
          autoFocus
        />

        <Button disabled={!name} type="submit">
          Search
        </Button>
      </Form>
      {isLoading && <Loader />}
      {error && <p>Something went wrong</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
export default Movies;
