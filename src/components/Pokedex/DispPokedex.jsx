import {React, useState} from 'react';
import axios from "axios";
import "./style/CardPokedex.css";

const DispPokedex = () => {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
      name: "", 
      species: "", 
      img: "", 
      hp: "",
      attack: "",
      defense: "",
      type: "",
  });
  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) =>{
      setPokemon(
        {name: pokemonName, 
        species: res.data.species.name, 
        img: res.data.sprites.front_default, 
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        type: res.data.types[0].type.name,
      });
      setPokemonChosen(true);
    }
    );
  } 

  return (
    <div className="Content">
      <div className="TitleSection">
        <h1>Pokedex</h1>
        <input type="text" onChange={(event) => {setPokemonName(event.target.value);} }/>
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
      <div className="DisplaySection">
        {!pokemonChosen ? 
          (<h1> Veuillez sélectionner un Pokemon</h1>)
          : (
            <>
              <h1> {pokemon.name}</h1>
              <img src={pokemon.img} />
              <h3> Species: {pokemon.species}</h3>
              <h3> Type: {pokemon.type}</h3>
              <h4> Hp: {pokemon.hp}</h4>
              <h4> Attack: {pokemon.attack}</h4>
              <h4> Defense: {pokemon.defense}</h4>
            </>
          )
        }
      </div>
    </div>
  );
};

export default DispPokedex;