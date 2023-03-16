import { Modal } from "antd";
import React, { useEffect, useState } from "react";

interface Props {
  id: number;
  name: string;
  image: string;
  abilities:
    | {
        ability: {
          name: string;
        };
      }[]
    | undefined;
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

const PokemonCard: React.FC<Props> = ({
  id,
  name,
  image,
  abilities,
  detail,
  setDetail,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  useEffect(() => {
    setIsSelected(id === detail?.id);
  }, [detail]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isSelected ? (
        <Modal
          open={isModalOpen}
          onCancel={handleCancel}
          footer = {null}
          closable= {true}
          className="p-0"
        >
          <div
            className="bg-[#f4f1de] my-2 rounded-[12px] flex justify-center items-center flex-col mx-[10px] p-[30px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, #f2cc8f 0%, #f4f1de 100%)",
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
            <p className="text-[18px] m-0 text-[#3d405b] font-[500]">Abilities:</p>
            <div className="w-[100%] flex justify-center items-center">
              {abilities?.map((ability) => {
                return (
                  <span className="text-[#3d405b] font-[500] mx-[16px] ">
                    {ability.ability.name}
                  </span>
                );
              })}
            </div>
          </div>
        </Modal>
      ) : (
        <div
          className="bg-[#f4f1de] p-2 my-2 rounded-[12px] flex justify-center items-center flex-col w-[154px] mx-[10px]"
          onClick={showModal}
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
          {/* <p>
        Abilities:
        {abilities?.map((ability) => {
          return (
            <div>
              <span className="text-[#3d405b] font-[500]">
                {ability.ability.name}
              </span>
            </div>
          );
        })}
      </p> */}
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
