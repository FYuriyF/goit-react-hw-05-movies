import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/fetchMoviesApi';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCastMovie] = useState(null);
  const { movieId } = useParams();

  const imgNotFound =
    'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

  useEffect(() => {
    API.getMovieCast(movieId)
      .then(data => setCastMovie(data))
      .catch(console.log);
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <>
      {cast && cast.length > 0 ? (
        <ul>
          {cast.slice(0, 19).map(({ id, name, character, profile_path }) => (
            <li key={id} className={css.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : imgNotFound
                }
                alt={name}
                className={css.img}
                width="100"
              />

              <div>
                <p>
                  <b>{name}</b>
                </p>
                <p>
                  Character: <b>{character}</b>
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No casts</div>
      )}
    </>
  );
};

export default Cast;
