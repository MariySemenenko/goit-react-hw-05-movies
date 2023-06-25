
//тут рендериться один список фільмів для двох сторінок Home та Movies

import { Link, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';

//створюю посилання на фільми
export const MoviesList = ({movies}) => {
const location = useLocation();
   
return (
    <div>
<ul>
    {movies.map(({id, title, original_title, name}) =>  //дістаю значення з фільмів {id, title, original_title, name}
    <li key = {id}>
        <Link to={`/movies/${id}`} state={{from: location}} >   
       <h2>{title || name || original_title }</h2>
        </Link>
    </li>
    )}

  
</ul>
    </div>
)
}
//при нажиманні на один фільм нас виводить на сторінку MovieDetails та виводиться інфо про конкретний фільм
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