//тут відмальовується список трендів
import { useFetchTrending } from 'hooks';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { H1 } from './Home.styled';

const Home = () => {
  const { movies, error, isLoading } = useFetchTrending();

  return (
    <>
      <H1>Trending Movies</H1>
      {isLoading && <Loader />}
      {error && <p>Something went wrong</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
export default Home;
//далі список фільмів виводиться у <MoviesList>
