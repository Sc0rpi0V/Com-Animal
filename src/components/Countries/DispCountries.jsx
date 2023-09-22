import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./style/Countries.css";
import "./style/Card.css";

const DispCountries = () => {
  const [data, setData] = useState([]);  
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  // useEffect jouer lorsque composant est monté
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => setData(res.data));
  }, []);

  return (
    <div className="dispcountries">
      <ul className="list-radio">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent) => (
          <li key={continent}>
            <input
              type="radio"
              id={continent}
              name="RadioContentContinent"
              checked={continent.toLowerCase() === selectedRadio.toLowerCase()}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default DispCountries;