import React from "react";
import SearchContainer from "../components/SearchContainer";
import SearchResult from "../components/SearchResult";

const SearchResults = (props) => {
  const results = props.results.filter((result) => result.score >= 6);
  const resultCount = results.length;
  const resultStatement = resultCount === 1 ? "result" : "results";

  return (
    <>
      <SearchContainer currentSearch={props.search} submit={props.submit} />
      <div className="search-results-container">
        <div className="search-results-counter">
          We found {resultCount} {resultStatement}...
        </div>
        {results.map((result) => (
          <SearchResult key={result._id} information={result} />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
