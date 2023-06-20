import { Link, useLocation } from "react-router-dom"


export const MoviesList = ({movies}) => {
const location = useLocation();
   
return (
    <div>
<ul>
    {movies.map(({id, title, original_title, name}) =>  
    <li key = {id}>
        <Link to={`/movies/${id}`} state={{from: location}} >
        {title || name || original_title }
        </Link>
    </li>
    )}

  
</ul>
    </div>
)
}