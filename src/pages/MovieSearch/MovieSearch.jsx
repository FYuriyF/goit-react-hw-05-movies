import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../services/fetchMoviesApi';
import MoviesList from '../../components/MovieList/MovieList';
import css from './MovieSearch.module.css';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovie] = useState(null);
  const [totalRezultMovie, setTotalRezMovie] = useState(null);
  const [inputSearch, setInputSearch] = useState(query);

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

  const handleInputChange = e => {
    setInputSearch(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const queryNormalized = form.query.value.toLowerCase().trim();

    setSearchParams({ query: queryNormalized });
    // form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          className={css.input}
          value={inputSearch}
          onChange={handleInputChange}
          placeholder="Enter movie name"
        />

        <button type="submit" className={css.submit}>
          Search
        </button>
      </form>

      {movies && <MoviesList movies={movies} />}

      {totalRezultMovie === 0 && <div>Not found movies</div>}
    </>
  );
};

export default MovieSearch;
