import React from "react";

interface Props {
  id: number;
  name: string;
  image: string;
}

const PokemonCard: React.FC<Props> = ({ id, name, image }) => {
  return (
    <div
      className="bg-[#f4f1de] p-2 my-2 rounded-[12px] flex justify-center items-center flex-col w-[154px] mx-[10px]"
      style={{
        backgroundImage: "linear-gradient(0deg, #f2cc8f 0%, #f4f1de 100%)",
      }}
    >
      <p
        className="text-[24px] font-[700] text-[#3d405b] m-0"
        style={{
          maxWidth: "100%",
          whiteSpace: "nowrap",
          display: "inline-block",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {name}
      </p>
      <img src={image} alt={name} />
    </div>
  );
};

export default PokemonCard;
