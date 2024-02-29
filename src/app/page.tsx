"use client"
import {useState } from "react";
import Image from "next/image";
import SetaDireita from './assets/seta-direita.png';
import Arrow from './assets/arrow.png';
import Page from "./components/page";
import Title from "./components/title";
import Escola from "./assets/Fabula1.png";
import BeABa from "./assets/Fabula2.png";
import A from "./assets/Fabula3.png";
import SomDoP from "./assets/Fabula4.png";
import Maninha from "./assets/Fabula5.png";



export default function Home() {
  const [currentPage, setCurrentPage] = useState(3);
  const value = 10;

  function handleClick() {
    if(currentPage < 6) {
      setCurrentPage(prevState => prevState + 1);
    } 
  }

  function handleClickReturn() {
    if(currentPage >= 3){
      setCurrentPage(prevState => prevState - 1);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 kranky-regular">
      <Title />
      <main className="flex justify-between items-center">
      <Image src={Arrow} width={20} alt="Seta Esquerda" className="seta rotate-90" onClick={handleClickReturn}></Image>
        <div className="flip-book">
          <div className="flip fliped">
            <div className="front first bg-green-500 border-t-[3px] border-green-400">
              <h3 className="text-center mt-5 text-white">AO CHEGAR NA MINHA ESCOLA</h3>
              <p className="p-5 text-white">Ao chegar na minha escola <br />Meu bom dia vou contar <br />Meu bom bom dia caro mestre <br />Vamos todos trabalhar <br />Ao chegar na minha escola <br />Meu bom dia vou contar <br />Aos queridos coleguinhos <br />Desta fâmia salutar.</p>
            </div>
          </div>
          <div className={currentPage === 2 ? "flip" : "flip fliped"} style={currentPage === 2 ? {zIndex : (value + 2).toString()} : {zIndex: (value - 2).toString()}}>
            <div className="front front_image bg-green-500 border-t-[3px] border-t-green-400 border-green-200">
              <Image src={Escola} alt="Escola"></Image>
            </div>
            <div className="back bg-blue-500 border-blue-200">
              <h3 className="text-center mt-5 text-white">BE-A-BA</h3>
              <p className="p-5 text-white">O ba-be-bi-bo-bu <br />Vamos todos aprender <br />Soletrando o be-a-ba <br />Uma das letras do ABC<br />O b é uma das letras <br />Que se encontra no ABC <br />Luis você não sabe <br />Quanto eu gosto de você</p>
            </div>
          </div>
          <div className={currentPage <= 3 ? "flip" : "flip fliped"} style={currentPage <= 3 ? {zIndex : (value - 3).toString()} : {zIndex: (value + 3).toString()}}>
            <div className="front_image bg-blue-500">
              <Image src={BeABa} alt="BeABa"></Image>
            </div>
            <div className="back bg-ligh-400">
              <h3 className="text-center mt-5 text-white">A</h3>
              <p className="p-5 text-white">A Ana tem uma trança<br />Muito fácil de trançar <br />Ela põe um lindo laço <br />E vai contente passear</p>
            </div>
          </div>
          <div className={currentPage <= 4 ? "flip" : "flip fliped"} style={currentPage <= 4 ? {zIndex : (value - 4).toString()} : {zIndex: (value + 4).toString()}}>
            <div className="front_image bg-teal-400">
              <Image src={A} alt="BeABa"></Image>
            </div>
            <div className="back bg-gray-400">
              <h3 className="text-center mt-5 text-white">O SOM DA LETRA P</h3>
              <p className="p-5 text-white">Olha lá, seu Sarafim<br />Esta letrinha faz assim <br />Com a ela faz pa <br />Com e ela faz pe <br /> Com i ela faz pi <br />Com o ela faz po <br /> 
              Com u ela faz pu <br /> Pa pe pi po pu <br /> Pa pe pi po pu</p>
            </div>
          </div>
          <div className={currentPage <= 5 ? "flip" : "flip fliped"} style={currentPage <= 5 ? {zIndex : (value - 5).toString()} : {zIndex: (value + 5).toString()}}>
            <div className="front_image bg-gray-400">
              <Image src={SomDoP} alt="SomDoP"></Image>
            </div>
            <div className="back bg-pink-400">
              <h3 className="text-center mt-5 text-white">Maninha</h3>
              <p className="p-5 text-white">Vamos maninha, vamos<br />Juntinhos escrever <br />As palavras e as frases <br />Para a meninada ler</p>
            </div>
          </div>
          <div className="flip">
            <div className="front_image bg-pink-400">
              <Image src={Maninha} alt="A"></Image>
            </div>
          </div>
        </div>
        {/* <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">toggle</button>  */}
        <Image src={Arrow} width={20} alt="Seta Direita" className="seta -rotate-90" onClick={handleClick}></Image>
      </main>
    </div>
  );
}
