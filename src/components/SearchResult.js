import React from "react";
import { Link } from "react-router-dom";

const SearchResult = (props) => {
  const information = props.information;

  return (
    <div className="search-result">
      <div className="result-title">
        <Link to={`/airport/${information.ident}`}>{information.name}</Link>
      </div>
      <div className="result-location">
        <b>
          {information.municipality || "UKNOWN"}, {information.iso_country}
        </b>
      </div>
      <div className="result-identifiers">
        <b>IATA:</b> {information.iata_code || ""} | <b>ICAO:</b>{" "}
        {information.gps_code || ""} | <b>FAA:</b> {information.ident || ""}
      </div>
    </div>
  );
};

export default SearchResult;
