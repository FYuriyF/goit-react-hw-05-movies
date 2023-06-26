import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from '../pages/MovieSearch/MovieSearch.module.css';

const SearchForm = ({ handleSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [inputSearch, setInputSearch] = useState(query);

  const handleInputChange = e => {
    setInputSearch(e.currentTarget.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const queryNormalized = form.query.value.toLowerCase().trim();

    setSearchParams({ query: queryNormalized });
    // form.reset();
    handleSubmit();
  };

  return (
    <form onSubmit={onSubmit} className={css.form}>
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
  );
};

export default SearchForm;
