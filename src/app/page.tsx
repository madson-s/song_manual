"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Escola from './assets/Fabula1.png';
import BeABa from './assets/Fabula2.png';
import A from './assets/Fabula3.png';
import SomDoP from './assets/Fabula4.png';
import Maninha from './assets/Fabula5.png';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(2);
  const value = 10;

  function handleClick() {
    setCurrentPage(prevState => prevState + 1);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flip-book">
        <div className="flip fliped">
          <div className="front first bg-green-400">
            <span className="">1</span>
            <h3 className="ps-4 mt-3">AO CHEGAR NA MINHA ESCOLA</h3>
            <p className="p-5">Ao chegar na minha escola <br />Meu bom dia vou contar <br />Meu bom bom dia caro mestre <br />Vamos todos trabalhar <br />Ao chegar na minha escola <br />Meu bom dia vou contar <br />Aos queridos coleguinhos <br />Desta fâmia salutar.</p>
          </div>
        </div>
        <div className={currentPage === 2 ? "flip" : "flip fliped"} style={currentPage === 2 ? {zIndex : (value + 2).toString()} : {zIndex: (value - 2).toString()}}>
          <div className="front bg-green-400">
            <span>2</span>
            <Image src={Escola} alt="Escola"></Image>
          </div>
          <div className="back bg-blue-400">
            <span>3</span>
            <h3 className="ps-5 mt-1">BE-A-BA</h3>
            <p className="p-5">O ba-be-bi-bo-bu <br />Vamos todos aprender <br />Soletrando o be-a-ba <br />Uma das letras do ABC<br />O b é uma das letras <br />Que se encontra no ABC <br />Luis você não sabe <br />Quanto eu gosto de você</p>
          </div>
        </div>
        <div className={currentPage <= 3 ? "flip" : "flip fliped"} style={currentPage <= 3 ? {zIndex : (value - 3).toString()} : {zIndex: (value + 3).toString()}}>
          <div className="front bg-blue-400">
            <span>4</span>
            <Image src={BeABa} alt="BeABa"></Image>
          </div>
          <div className="back bg-teal-400">
            <span>5</span>
            <h3 className="ps-5 mt-1">A</h3>
            <p className="p-5">A Ana tem uma trança<br />Muito fácil de trançar <br />Ela põe um lindo laço <br />E vai contente passear</p>
          </div>
        </div>
        <div className={currentPage <= 4 ? "flip" : "flip fliped"} style={currentPage <= 4 ? {zIndex : (value - 4).toString()} : {zIndex: (value + 4).toString()}}>
          <div className="front bg-teal-400">
            <span>6</span>
            <Image src={A} alt="BeABa"></Image>
          </div>
          <div className="back bg-gray-400">
            <span>7</span>
            <h3 className="ps-5 mt-1">O SOM DA LETRA P</h3>
            <p className="p-5">Olha lá, seu Sarafim<br />Esta letrinha faz assim <br />Com a ela faz pa <br />Com e ela faz pe <br /> Com i ela faz pi <br />Com o ela faz po <br /> 
            Com u ela faz pu <br /> Pa pe pi po pu <br /> Pa pe pi po pu</p>
          </div>
        </div>
        <div className={currentPage <= 5 ? "flip" : "flip fliped"} style={currentPage <= 5 ? {zIndex : (value - 5).toString()} : {zIndex: (value + 5).toString()}}>
          <div className="front bg-gray-400">
            <span>8</span>
            <Image src={SomDoP} alt="SomDoP"></Image>
          </div>
          <div className="back bg-pink-400">
            <span>9</span>
            <h3 className="ps-5 mt-1">Maninha</h3>
            <p className="p-5">Vamos maninha, vamos<br />Juntinhos escrever <br />As palavras e as frases <br />Para a meninada ler</p>
          </div>
        </div>
        <div className="flip">
          <div className="front bg-pink-400">10
            <Image src={Maninha} alt="A"></Image>
          </div>
        </div>
      </div>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">toggle</button> 
    </main>
  );
}
