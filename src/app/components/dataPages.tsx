import React from "react";
import { dataSet } from "../dataset";
import Image from "next/image";

interface DataPagesProps {
    currentPage: number;
}

interface ColorVariants {
    [key: string]: string;
}

export default function DataPages({currentPage}: DataPagesProps){

    const value = 100;

    const colorVariants:ColorVariants = {
        lime: 'bg-lime-500',
        blue: 'bg-blue-500 hover:bg-blue-500 text-white',
        cyan: 'bg-cyan-500 hover:bg-cyan-400 text-white',
        teal: 'bg-teal-500 hover:bg-teal-400 text-black',
        violet: 'bg-violet-500',
    }

    const searchData = () => {
        return(
            <>
                {dataSet.map((item, index) => (
                    <>
                        <div key={index} className={currentPage <= index + 2 ? "flip" : "flip fliped"} style={currentPage <= index + 2 ? {zIndex : (value - index).toString()} : {zIndex: (value + index).toString()}}>
                            <div className={`front front_image ${colorVariants[item.color]} border-t-[3px] border-t-${item.color}-400 border-green-200`}>
                                <Image src={item.image.src} alt={item.image.alt}></Image>
                            </div>
                            <div className={`back bg-${dataSet[index + 1] ? dataSet[index+1].color : ''}-500 border-t-[3px] border-${dataSet[index + 1] ? dataSet[index+1].color : ''}-400 border-blue-200`}>
                                <h3 className="text-center mt-5 text-white">{dataSet[index+1] ? dataSet[index+1].song.title : ''}</h3>
                                <p dangerouslySetInnerHTML={{ __html: dataSet[index+1] ? dataSet[index+1].song.lyrics : '' }} className="text-white"></p>
                            </div>
                        </div>
                    </>
                ))}
            </>
        )
    }
    
    return(
        <div>
            {searchData()}
        </div>
    )
}