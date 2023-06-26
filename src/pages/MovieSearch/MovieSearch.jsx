import { useEffect, useState } from 'react';
import * as API from '../../services/fetchMoviesApi';
import MoviesList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm';

const MovieSearch = () => {
  const [movies, setMovie] = useState(null);
  const [totalRezultMovie, setTotalRezMovie] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get('query') ?? '';

    if (query === '') return;

    setMovie(null);
    setTotalRezMovie(null);

    API.getMoviesQuery(query)
      .then(data => {
        setMovie(data.results);
        setTotalRezMovie(data.total_results);
      })
      .catch(console.log);
  }, []);

  const handleSubmit = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get('query') ?? '';

    if (query === '') return;

    setMovie(null);
    setTotalRezMovie(null);

    API.getMoviesQuery(query)
      .then(data => {
        setMovie(data.results);
        setTotalRezMovie(data.total_results);
      })
      .catch(console.log);
  };

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />

      {movies && <MoviesList movies={movies} />}

      {totalRezultMovie === 0 && <div>Not found movies</div>}
    </>
  );
};

export default MovieSearch;
