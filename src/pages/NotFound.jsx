import { useNavigate } from 'react-router-dom';
import { Div, Button } from './NotFound.styled'

const NotFound = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => navigate('/');

  return (
    <Div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <div>
        <Button onClick={goHomeHandler}>Go back home</Button>
      </div>
    </Div>
  );
};
export default NotFound;
