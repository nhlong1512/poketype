import React, { useState } from "react";
import "./App.css";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import axios from "axios";

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<string>("")
  return (
    <div className="App m-0 p-0">
      <Layout className="h-[100vh] m-0 bg-[#3d405b]">
        <Content className="my-[16px] mx-[32px]">
          <header className="text-[#81b29a] tracking-[0.25rem] font-[600] text-[40px] text-center">
            Pokemon
          </header>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
