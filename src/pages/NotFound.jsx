import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => navigate('/');

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <div>
        <button onClick={goHomeHandler}>Go back home</button>
      </div>
    </div>
  );
};
export default NotFound;
