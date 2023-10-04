import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/CardPokedex.css';
import { useTranslation } from "react-i18next";

const DispPokedex = () => {

  const { t } = useTranslation();

  const [pokemonName, setPokemonName] = useState('');
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: '',
    species: '',
    img: '', 
    hp: '',
    attack: '',
    defense: '',
    type: '',
  });
// eslint-disable-next-line
  const searchPokemon = () => {
    axios
      .get(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonName}`)
      .then((res) => {
        const newPokemonData = {
          name: res.data.name,
          species: res.data.species,
          img: res.data.image,
          hp: res.data.stats.HP,
          attack: res.data.stats.attack,
          defense: res.data.stats.defense,
          type: res.data.apiTypes[0].name,
        };

        setPokemon(newPokemonData);
        setPokemonChosen(true);
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite lors de la recherche du Pokémon:', error);
        setPokemonChosen(false);
      });
  };

  useEffect(() => {
    const handleEnterKeyPress = (event) => {
      if (event.key === 'Enter') {
        searchPokemon();
      }
    };

    document.addEventListener('keydown', handleEnterKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEnterKeyPress);
    };
  }, [searchPokemon]);

  return (
    <div className="Content">
      <div className="TitleSection">
        <h1>{t('pokedex')}</h1>
        <input
          type="text"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        />
        <button onClick={searchPokemon}>{t('searchPokemon')}</button>
      </div>
      <div className="DisplaySection">
        {!pokemonChosen ? (
          <h1>{t('titleSearchPokemon')}</h1>
        ) : (
          <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} alt={pokemon.name} />
            <h3>{t('speciesPokemon')}: {pokemon.species}</h3>
            <h3>{t('typePokemon')}: {pokemon.type}</h3>
            <h4>{t('healthPokemon')}: {pokemon.hp}</h4>
            <h4>{t('attackPower')}: {pokemon.attack}</h4>
            <h4>{t('defensePower')}: {pokemon.defense}</h4>
          </>
        )}
      </div>
    </div>
  );
};

export default DispPokedex;
