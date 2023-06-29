//import { useNavigate } from 'react-router-dom';
//import { Div, Button } from './NotFound.styled'

// const NotFound = () => {
//   const navigate = useNavigate();
//   const goHomeHandler = () => navigate('/', { replace: true });
// //{ replace: true } видаляю історію що не можна було повернутись на 404 помилку

//   return (
    // <Div>
    //   <h1>404 - Page Not Found</h1>
    //   <p>The page you are looking for does not exist.</p>
    //   <div>
    //     <Button onClick={goHomeHandler}>Go back home</Button>
    //   </div>
    // </Div>
//   );
// };
// export default NotFound;

//або відразу перекидаю користувача на сторінку Home
// import { Navigate } from 'react-router-dom';

// const NotFound = () => {
//   return <Navigate to="/" replace={true} />;
// };
// export default NotFound;


//або відразу перекидаю користувача на сторінку Home
import {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Div, P, H1 } from './NotFound.styled'

const NotFound = () => {
const navigate = useNavigate()
useEffect(() => {
  setTimeout(() => {
    navigate('/', { replace: true })
  }, 3000)
}, [])
return <>
<Div>
      <H1>404 - Page Not Found</H1>
      <P>The page you are looking for does not exist</P>
      
    </Div>
    </>
}
export default NotFound;