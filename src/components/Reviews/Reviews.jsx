import { Loader } from 'components/Loader/Loader';
import { useGetMovieReviews } from 'hooks/useGetMovieReviews';

export const Reviews = () => {
  const { reviews, error, isLoading } = useGetMovieReviews();
  return (
    <>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(() => (
            <li>
              <p></p>
              <p></p>
            </li>
          ))
        ) : (
          <p>There are no reviews yet</p>
        )}
      </ul>
      {isLoading && <Loader/>}
      {error && <div>{error}</div>}
    </>
  );
};
