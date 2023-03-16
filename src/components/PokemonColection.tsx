import React from "react";
import { PokemonDetail, PokemonSkillDetail } from "../model/PokemonModel";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: PokemonSkillDetail[];
  detail: {
    id: number;
    isOpened: boolean;
  };
  setDetail: React.Dispatch<
    React.SetStateAction<{
      id: number;
      isOpened: boolean;
    }>
  >;
}

const PokemonColection: React.FC<Props> = ({ pokemons, detail, setDetail }) => {
  const onClickDetail = (id: number) => {
    setDetail({
      id: id,
      isOpened: true,
    });
  };
  return (
    <div className="flex flex-wrap justify-center items-center mt-[2rem]">
      {pokemons.map((pokemon) => {
        return (
          <div
            onClick={() => onClickDetail(pokemon.id)}
            className="hover:cursor-pointer"
          >
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              abilities={pokemon.abilities}
              detail={detail}
              setDetail={setDetail}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PokemonColection;
