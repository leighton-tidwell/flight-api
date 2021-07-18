import React from "react";
import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

const SearchContainer = (props) => {
  const history = useHistory();
  const [search, setSearch] = useState("" || props.currentSearch);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    props.submit(search);
    history.push("/search");
  };

  return (
    <section className="search-container">
      <div className="search-box">
        Search for an Airport
        <div className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Enter an airport name, IATA code or location..."
            onChange={handleChange}
            value={search}
          />
          <button onClick={handleSubmit} className="search-submit">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default withRouter(SearchContainer);
