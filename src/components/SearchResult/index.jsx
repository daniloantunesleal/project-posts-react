import P from "prop-types";

export const SearchResult = ({ result }) => <p>Foi encontrado {result} resultados</p>;

SearchResult.propTypes = {
    result: P.number.isRequired,
};
