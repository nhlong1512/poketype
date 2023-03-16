export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface PokemonSkillDetail extends PokemonDetail {
  abilities?: {
    ability: {
      name: string;
    };
  }[];
}
