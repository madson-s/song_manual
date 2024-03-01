"use client";
import { useState } from "react";
import Image from "next/image";
import { Arrow } from "./components/Arrow";
import ArrowLeft from "./assets/arrowLeft.png";
import Title from "./components/Title";
import DataPages from "./components/dataPages";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(2);
  const value = 10;

  function handleClick() {
    if (currentPage < 6) {
      setCurrentPage((prevState) => prevState + 1);
    }
  }

  function handleClickReturn() {
    if (currentPage >= 3) {
      setCurrentPage((prevState) => prevState - 1);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 kranky-regular">
      <Title />
      <main className="flex justify-between items-center">
        <div className="circle_arrow">
          <Image
            src={ArrowLeft}
            width={35}
            alt="Seta Esquerda"
            className="setaE"
            onClick={handleClickReturn}
          ></Image>
        </div>
        <div className="flip-book">
          <div className="flip fliped">
            <div className="front first bg-lime-500 border-t-[3px] border-green-200">
              <h3 className="text-center mt-5 text-white">
                AO CHEGAR NA MINHA ESCOLA
              </h3>
              <p className="p-5 text-white">
                Ao chegar na minha escola <br />
                Meu bom dia vou contar <br />
                Meu bom bom dia caro mestre <br />
                Vamos todos trabalhar <br />
                Ao chegar na minha escola <br />
                Meu bom dia vou contar <br />
                Aos queridos coleguinhos <br />
                Desta fâmia salutar.
              </p>
            </div>
          </div>
          <DataPages currentPage={currentPage} />
        </div>
        <Arrow direction="right" alt="próximo" onClick={handleClick} />
      </main>
    </div>
  );
}
