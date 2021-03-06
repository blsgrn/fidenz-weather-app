import React from "react";
import City from "./City";
import CityArray from "../data/CityArray";

function CityList() {
  if (!CityArray || CityArray.length === 0) {
    return <p>No City Available</p>;
  }

  return (
    <div className="cities-container">
      {CityArray.map((codenum, index) => (
        <City key={index} code={codenum} />
      ))}
    </div>
  );
}

export default CityList;
