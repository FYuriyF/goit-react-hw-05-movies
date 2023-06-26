import { useState } from 'react';

import css from './SearchForm.module.css';

const SearchForm = ({ handleSubmit }) => {
  const [inputSearch, setInputSearch] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = e => {
    setInputSearch(e.currentTarget.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (inputSearch.trim() === '') {
      setError(true);
      return;
    }

    setError(false);
    handleSubmit(inputSearch);
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

      {error && <div className={css.error}>Please enter a movie name</div>}
    </form>
  );
};

export default SearchForm;
