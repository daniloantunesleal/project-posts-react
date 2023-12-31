import P from "prop-types";

import "./styles.css";

export const SearchInput = ({ handleChange, searchValue }) => (
    <input
        onChange={handleChange}
        className="search-input"
        value={searchValue}
        type="search"
        placeholder="Type your search"
    />
);

SearchInput.propTypes = {
    handleChange: P.func.isRequired,
    searchValue: P.string.isRequired,
};
