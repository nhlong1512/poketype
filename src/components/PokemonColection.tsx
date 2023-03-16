import React from "react";
import { PokemonDetail } from "../model/PokemonModel";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: PokemonDetail[];
}

const PokemonColection: React.FC<Props> = ({ pokemons }) => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-[2rem]">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
          />
        );
      })}
    </div>
  );
};

export default PokemonColection;
