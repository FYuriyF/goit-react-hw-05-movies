import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as API from '../services/fetchMoviesApi';
import Additional from '../components/Addititonal/Addititonal';
import InfoMovie from '../components/MovieInfo/MovieInfo';
import GoBackButton from '../components/GoBackButton/GoBackButton';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    API.getMovieById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <GoBackButton backLinkHref={backLinkHref} />
      <InfoMovie movie={movie} />
      <Additional location={backLinkHref} />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
