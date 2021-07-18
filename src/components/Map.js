import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const ChangeMapView = ({ coords }) => {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
};

const Map = (props) => {
  return (
    <>
      <MapContainer
        center={[props.coordinates.lat, props.coordinates.lon]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[props.coordinates.lat, props.coordinates.lon]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ChangeMapView
          coords={[props.coordinates.lat, props.coordinates.lon]}
        />
      </MapContainer>
    </>
  );
};

export default Map;
