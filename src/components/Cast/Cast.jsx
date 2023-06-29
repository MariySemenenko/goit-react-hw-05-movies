import { useGetMovieCredits } from 'hooks/useGetMovieCredits';
import { Loader } from 'components/Loader/Loader';
import { Ul, P, Img } from './Cast.styled';

//запит інформації про акторський склад для сторінки кінофільму
const Cast = () => {
  const { credit, error, isLoading } = useGetMovieCredits();
  // console.log(credit)
  return (
    <>
      <Ul>
        {credit.map(({ id, profile_path, original_name, character }) => (
          <li key={id}>
            <Img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : `data:image/jpeg;base64,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`
              }
              alt={original_name}
            />
            <P>Actor: {original_name}</P>
            <P>Character: {character}</P>
          </li>
        ))}
      </Ul>
      {isLoading && <Loader />}
      {error && <div>Error</div>}
    </>
  );
};
export default Cast;
