import React from "react";
import { PokemonDetail, PokemonSkillDetail } from "../model/PokemonModel";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: PokemonSkillDetail[];
}

const PokemonColection: React.FC<Props> = ({ pokemons}) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center mt-[2rem]">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            abilities={pokemon.abilities}
          />
        );
      })}
    </div>
  );
};

export default PokemonColection;
