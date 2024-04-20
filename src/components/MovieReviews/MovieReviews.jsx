import { useParams } from "react-router-dom";
import { searchMoviesCreditsById } from "../../components/apiServices/api";
import { useEffect, useState } from "react";
import css from "./MovieReviews.module.css";
import { searchMoviesRevById } from "../apiServices/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieRev, setmovieRev] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!movieId) return;

    const fetchMovieRev = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await searchMoviesRevById(movieId);
        setmovieRev(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieRev();
  }, [movieId]);
  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ul className={css.revList}>
        {movieRev.length > 0 ? (
          movieRev.map((rev) => {
            return (
              <li key={rev.id} className={css.revItem}>
                <p className={css.author}>Author: {rev.author}</p>
                <p>{rev.content}</p>
              </li>
            );
          })
        ) : (
          <p className={css.sorr}>Sorry, no yet review</p>
        )}
      </ul>
    </>
  );
};

export default MovieReviews;
