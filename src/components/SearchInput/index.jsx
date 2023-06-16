import "./styles.css"

export const SearchValue = ({ handleChange, searchValue }) => (
    <input onChange={handleChange} className="search-input" value={searchValue} type="search" placeholder="Type your search" />
)