import { Search } from "lucide-react";
import "./styles.css";

const SearchForm = () => {
  return (
    <form className="search-form">
      <input type="text" placeholder="Search by name or specialization..." />
      <button type="submit">
        <Search />
      </button>
    </form>
  );
};

export default SearchForm;
