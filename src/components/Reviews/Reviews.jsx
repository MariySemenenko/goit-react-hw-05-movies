import { Loader } from 'components/Loader/Loader';
import { useGetMovieReviews } from 'hooks/useGetMovieReviews';

export const Reviews = () => {
  const { reviews, error, isLoading } = useGetMovieReviews();
  // console.log(reviews)
  return (
    <>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ author, content, id}) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>Content: {content}</p>
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
