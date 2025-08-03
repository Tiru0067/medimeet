import { Search } from "lucide-react";
import "./styles.css";
import { useSearch } from "../../../../useSearch";

const SearchForm = () => {
  const { query, setQuery } = useSearch();

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or specialization..."
      />
      <button type="submit">
        <Search />
      </button>
    </form>
  );
};

export default SearchForm;
