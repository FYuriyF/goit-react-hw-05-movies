import css from '../pages/MovieSearch/MovieSearch.module.css';

const SearchForm = ({ handleSubmit, inputSearch, handleInputChange }) => {
  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(e);
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
