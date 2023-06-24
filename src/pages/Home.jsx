//тут відмальовується список трендів
import { useFetchTrending } from 'hooks';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const { movies, error, isLoading } = useFetchTrending();

  return (
    <>
      <h1>Trending Movies.</h1>
      {isLoading && <Loader />}
      {error && <p>Something went wrong</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
export default Home;
