
//тут рендериться один список фільмів для двох сторінок Home та Movies

import { useLocation } from "react-router-dom"
import PropTypes from 'prop-types';
import { Links, Li } from './MoviesList.styled'

//створюю посилання на фільми
export const MoviesList = ({movies}) => {
const location = useLocation();
   
return (
    <div>
<ul>
    {movies.map(({id, title, original_title, name}) =>  //дістаю значення з фільмів {id, title, original_title, name}
    <Li key = {id}>
        <Links to={`/movies/${id}`} state={{from: location}} >   
       {title || name || original_title }
        </Links>
    </Li>
    )}
</ul>
    </div>
)
}
//при нажиманні на один фільм нас виводить на сторінку MovieDetails та виводиться інфо про даний фільм
//<Link to={`/movies/${id}`} state={{from: location}} >  
MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        original_title: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string,
      })
    ).isRequired,
  };