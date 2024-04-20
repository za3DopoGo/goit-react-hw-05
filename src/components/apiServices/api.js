import axios from "axios";
const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGU4MDc1MjhmM2QyMDFlNDA2YWE5M2MwNzM5Y2NhMyIsInN1YiI6IjY2MGQwODJmOWM5N2JkMDE0OWEzNTU1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dpzy6juHHfSHEuB5CJy4gzClP8H0OlZsGQb17Yx5cd4",
  },
};
export const getTrendingMovies = async () => {
  const { data } = await axios.get(url, options);
  return data;
};

export const searchMoviesByQuery = async (query) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`,
    options
  );
  return data;
};

export const searchMoviesDetailsById = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US'`,
    options
  );
  return data;
};

export const searchMoviesCreditsById = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  return data;
};

export const searchMoviesRevById = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  return data;
};
