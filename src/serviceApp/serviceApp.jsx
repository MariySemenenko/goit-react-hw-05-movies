import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '2fe1a8067af2c3048e3f8cd6829927fa';

export const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`trending/all/day?api_key=${API_KEY}`);
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMoviesByQuery = async query => {
  try {
    const { data } = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieDetails = async movieId => {
  // console.log(movieId)
  try {
    const { data } = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieCredits = async movieId => {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data.cast;
  } catch (error) {
    console.log(error.message);
  }
};
export const getMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
};
