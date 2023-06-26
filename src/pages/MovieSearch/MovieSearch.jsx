import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../services/fetchMoviesApi';
import MoviesList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovie] = useState(null);
  const [totalRezultMovie, setTotalRezMovie] = useState(null);

  useEffect(() => {
    if (query === '') return;

    setMovie(null);
    setTotalRezMovie(null);

    API.getMoviesQuery(query)
      .then(data => {
        setMovie(data.results);
        setTotalRezMovie(data.total_results);
      })
      .catch(console.log);
  }, [query]);

  const handleSubmit = inputSearch => {
    setSearchParams({ query: inputSearch.toLowerCase().trim() });
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
