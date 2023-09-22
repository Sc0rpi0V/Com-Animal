import React from 'react';
import DispPokedex from '../components/Pokedex/DispPokedex';
import "./style/Pokedex.css";

const Pokedex = () => {
  return (
    <div className="pokedex">
      <DispPokedex />
    </div>
  );
};

export default Pokedex;