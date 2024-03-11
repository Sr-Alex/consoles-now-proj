import PropTypes from "prop-types";

import SearchIcon from "../../assets/icons/SearchIcon";

function Searcher({ onSubmit }) {
  return (
    <form
    onSubmit={onSubmit}
      className="flex items-center w-2/3 min-w-48 max-w-64 h-10 ml-auto rounded-md border-2 border-proj-black dark:border-proj-white"
    >
      <input
        className="w-full pl-2 outline-none font-Jura text-lg text-proj-darkGray bg-transparent dark:text-proj-lightGray"
        id="searchInput"
        type="search"
        name="searchInput"
        placeholder="Procurar por..."
      />
      <button type="submit" className="flex items-center justify-center w-16 h-full">
        <SearchIcon className="fill-proj-darkGray dark:fill-proj-lightGray" />
      </button>
    </form>
  );
}

Searcher.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searcher;
