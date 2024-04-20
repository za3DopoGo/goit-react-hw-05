import css from "./SearchForm.module.css";

const SearchForm = ({ onSearchQuery }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    if (value.trim() === "") {
      toast("Please enter text to search for movies!", {
        icon: "✍🏻",
        style: {
          borderRadius: "10px",
          background: "red",
          color: "#fff",
        },
      });

      return;
    }
    onSearchQuery(value.trim());
    e.target.reset();
  };
  return (
    <div className={css.form}>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <input
          className={css.searchField}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button className={css.searchBtn} title="Pres for search" type="submit">
          🔎
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
