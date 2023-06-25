//тут потрібен імпорт через lazy
import Home from "pages/Home";
import Movies from "pages/Movies";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { MovieDetails } from "../pages/MovieDetails"
import { Cast } from "./Cast/Cast";
import NotFound from "pages/notFound/NotFound";
import { Reviews } from "./Reviews/Reviews";

 
export const App = () => {



  return (
    <>
    <Routes>
        <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
     
    </>
  );
};
