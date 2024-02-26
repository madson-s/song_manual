"use client"
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(true)
  function handleClick() {
    setCurrentPage(prevState => !prevState)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flip-book ">
        <div className="flip fliped">
          <div className="front bg-green-400">1</div>
        </div>
        <div className="flip">
          <div className="front bg-blue-400">4</div>
        </div>
        <div className={currentPage ? "flip" : "flip fliped"}>
          <div className="front bg-green-400">2</div>
          <div className="back bg-blue-400">3</div>
        </div>
       
      </div>
      <button onClick={handleClick}>toggle</button> 
    </main>
  );
}
