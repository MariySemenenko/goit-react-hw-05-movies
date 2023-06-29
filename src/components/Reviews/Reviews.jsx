import { Loader } from 'components/Loader/Loader';
import { useGetMovieReviews } from 'hooks/useGetMovieReviews';
import { Ul, Author, P, Color } from './Reviews.styled';

const Reviews = () => {
  const { reviews, error, isLoading } = useGetMovieReviews();
  // console.log(reviews)
  return (
    <>
      <Ul>
        {reviews.length > 0 ? (
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <Author>Author: {author}</Author>
              <P>Content: {content}</P>
            </li>
          ))
        ) : (
          <Color>There are no reviews yet</Color>
        )}
      </Ul>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
    </>
  );
};
export default Reviews;
