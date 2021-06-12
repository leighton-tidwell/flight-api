import React from "react";
import { useParams } from "react-router-dom";

function Airport(props) {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default Airport;
