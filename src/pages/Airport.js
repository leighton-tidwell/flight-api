import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Map from "../components/Map";

const DOMAIN = process.env.DOMAIN;

const Airport = (props) => {
  const [airport, setAirport] = useState({});
  const [coordinates, setCoordinates] = useState({
    lon: 0,
    lat: 0,
  });
  const { id } = useParams();

  useEffect(() => {
    if (!id) return console.log("ID empty");
    axios.get(`${DOMAIN}api/faa/${id}`).then((res) => {
      const airportres = res.data[0];
      const coordinates = airportres.coordinates.split(", ");

      setAirport(airportres);
      setCoordinates({
        lon: Number(coordinates[0]),
        lat: Number(coordinates[1]),
      });
      console.log("fetched", res.data);
    });
  }, [id]);

  useEffect(() => {
    console.log(airport);
  }, [airport]);

  useEffect(() => {
    console.log(coordinates);
  }, [coordinates]);

  return (
    <>
      <Map coordinates={coordinates} />
      <section className="airport-container">
        <div className="airport-title">{airport.name}</div>
        <div className="airport-details">
          <table className="airport-table">
            <tbody>
              <tr className="airport-tablerow">
                <td className="airport-table-key">Continent</td>
                <td className="airport-table-value">{airport.continent}</td>
              </tr>
              <tr className="airport-tablerow">
                <td className="airport-table-key">Country</td>
                <td className="airport-table-value">{airport.iso_country}</td>
              </tr>
              <tr className="airport-tablerow">
                <td className="airport-table-key">Region</td>
                <td className="airport-table-value">{airport.iso_region}</td>
              </tr>
              <tr className="airport-tablerow">
                <td className="airport-table-key">City</td>
                <td className="airport-table-value">{airport.municipality}</td>
              </tr>
              <tr className="airport-tablerow">
                <td className="airport-table-key">Coordinates</td>
                <td className="airport-table-value">{airport.coordinates}</td>
              </tr>
              <tr className="airport-tablerow">
                <td className="airport-table-key">Elevation (ft)</td>
                <td className="airport-table-value">{airport.elevation_ft}</td>
              </tr>
              <tr className="airport-tablerow">
                <td className="airport-table-key">FAA Identifier</td>
                <td className="airport-table-value">{airport.ident}</td>
              </tr>
              <tr className="airport-tablerow">
                <td className="airport-table-key">ICAO</td>
                <td className="airport-table-value">{airport.gps_code}</td>
              </tr>
              <tr className="airport-tablerow">
                <td className="airport-table-key">IATA</td>
                <td className="airport-table-value">{airport.iata_code}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Airport;
