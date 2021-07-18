import React from "react";

function About(props) {
  return (
    <>
      <div className="about-container">
        <div className="about-title">About Flight API</div>
        <div className="about-description">
          <p className="about-about">
            Flight API is a simple airport API service that allows developers to
            query basic airport information for free. Information on how to use this
            API can be found below.
          </p>
          <p className="about-api">
            <span class="about-bold">Current API Usage:</span>
            <span class="api-link">/api/search/:search</span>
            Query this url with any string to get an array of objects matching
            your search query. <br />
            Example output:
            <span class="api-link">/api/search/KADW</span>
            <span class="api-link">
              [<br />
              &nbsp;&nbsp;0:&#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;continent: "NA", <br />
              &nbsp;&nbsp;&nbsp;&nbsp;coordinates: "-76.866997, 38.810799",
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;elevation_ft: "280", <br />
              &nbsp;&nbsp;&nbsp;&nbsp;gps_code: "KADW", <br />
              &nbsp;&nbsp;&nbsp;&nbsp;iata_code: "ADW", <br />
              &nbsp;&nbsp;&nbsp;&nbsp;ident: "KADW", <br />
              &nbsp;&nbsp;&nbsp;&nbsp;iso_country: "US", <br />
              &nbsp;&nbsp;&nbsp;&nbsp;iso_region: "US-MD", <br />
              &nbsp;&nbsp;&nbsp;&nbsp;local_code: "ADW", <br />
              &nbsp;&nbsp;&nbsp;&nbsp;municipality: "Camp Springs", <br />
              &nbsp;&nbsp;&nbsp;&nbsp;name: "Joint Base Andrews", <br />
              &nbsp;&nbsp;&nbsp;&nbsp;score: 6.6, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;type: "large_airport", <br />
              &nbsp;&nbsp;&nbsp;&nbsp;_id: "60c3f20520fe691bd452ab55", <br />
              &nbsp;&nbsp;&#125;
              <br />
              ]<br />
            </span>
          </p>
          <p className="about-api">
            <span class="api-link">/api/faa/:faa</span>
            Query this url with any FAA identifier code and recieve an object
            for that airport. <br />
            Example output:
            <span class="api-link">/api/faa/KADW</span>
            <span class="api-link">
              &#123;
              <br />
              &nbsp;&nbsp;continent: "NA", <br />
              &nbsp;&nbsp;coordinates: "-76.866997, 38.810799", <br />
              &nbsp;&nbsp;elevation_ft: "280", <br />
              &nbsp;&nbsp;gps_code: "KADW", <br />
              &nbsp;&nbsp;iata_code: "ADW", <br />
              &nbsp;&nbsp;ident: "KADW", <br />
              &nbsp;&nbsp;iso_country: "US", <br />
              &nbsp;&nbsp;iso_region: "US-MD", <br />
              &nbsp;&nbsp;local_code: "ADW", <br />
              &nbsp;&nbsp;municipality: "Camp Springs", <br />
              &nbsp;&nbsp;name: "Joint Base Andrews", <br />
              &nbsp;&nbsp;score: 6.6, <br />
              &nbsp;&nbsp;type: "large_airport", <br />
              &nbsp;&nbsp;_id: "60c3f20520fe691bd452ab55", <br />
              &#125;
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
