import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, ConfigProvider, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import axios from "axios";
import PokemonColection from "./components/PokemonColection";
import { Pokemon, PokemonDetail } from "./model/PokemonModel";

const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon?limit=20";

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");

  
  const getPokemon = async (url:string) => {
    const res = await axios.get(url);
    console.log(res.data);
    setNextUrl(res.data.next);

    res.data.results.forEach(async (pokemon: Pokemon) => {
      const poke = await axios.get(`${pokemon.url}`);
      setPokemons((p) => [...p, poke.data]);
    });
  };

  useEffect(() => {
    getPokemon(URL_POKEMON);
  }, []);

  const onLoadMore = () => {
    getPokemon(nextUrl)
  }

  return (
    <div className="App m-0 p-0">
      <Layout className="h-[100%] min-h-[100vh] m-0 bg-[#3d405b]">
        <Content className="my-[16px] mx-[32px]">
          <header className="text-[#81b29a] tracking-[0.25rem] font-[600] text-[40px] text-center">
            Pokemon
          </header>
          <PokemonColection pokemons={pokemons} />
          <div className="flex justify-center items-center">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#81b29a",
                },
              }}
            >
              <Button
                type="primary"
                className="py-[10px] px-[20px] text-[#3d405b] text-[1.5rem] rounded-[16px] my-[20px] leading-[2rem] h-auto font-[500]"
                onClick={onLoadMore}
              >
                Load More...
              </Button>
            </ConfigProvider>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
