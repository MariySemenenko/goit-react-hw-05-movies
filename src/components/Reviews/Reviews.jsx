import { Loader } from 'components/Loader/Loader';
import { useGetMovieReviews } from 'hooks/useGetMovieReviews';
import { Ul, Author, P } from './Reviews.styled'

export const Reviews = () => {
  const { reviews, error, isLoading } = useGetMovieReviews();
  // console.log(reviews)
  return (
    <>
      <Ul>
        {reviews.length > 0 ? (
          reviews.map(({ author, content, id}) => (
            <li key={id}>
              <Author>Author: {author}</Author>
              <P>Content: {content}</P>
            </li>
          ))
        ) : (
          <p>There are no reviews yet</p>
        )}
      </Ul>
      {isLoading && <Loader/>}
      {error && <div>{error}</div>}
    </>
  );
};
