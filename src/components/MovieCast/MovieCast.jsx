import { useParams } from "react-router-dom";
import { searchMoviesCreditsById } from "../../components/apiServices/api";
import { useEffect, useState } from "react";
import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCredits, setmovieCredits] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCredits = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await searchMoviesCreditsById(movieId);
        setmovieCredits(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}{" "}
      <ul className={css.actors}>
        {Array.isArray(movieCredits) &&
          movieCredits.map((credit) => {
            return (
              <li key={credit.id} className={css.movieItem}>
                <img
                  className={css.img}
                  src={
                    credit.profile_path !== null
                      ? `https://image.tmdb.org/t/p/w400${credit.profile_path}`
                      : defaultImg
                  }
                  alt={credit.name}
                />
                <div className={css.name}>
                  <p>{credit.name}</p>
                  <p>Character: {credit.character}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MovieCast;
