import React from "react";
import { dataSet } from "../dataset";
import Midia from "./midia";

interface DataPagesProps {
    currentPage: number;
}

export default function DataPages({currentPage}: DataPagesProps){

    const value = 5;

    const searchData = () => {
        return(
            <>
                {dataSet.map((item, index) => (
                    <>
                        <div 
                            key={index} 
                            className={currentPage <= index + 2 ? "flip" : "flip fliped"} 
                            style={currentPage <= index + 2 ? {zIndex : (value - index).toString()} : {zIndex: (value + index).toString()}}>
                            <Midia item = {item}/>
                            <div 
                                className={`back bg-${dataSet[index + 1] ? dataSet[index+1].color : ''}-500 border-t-[3px] border-${dataSet[index + 1] ? dataSet[index+1].color : ''}-400 border-blue-200`}>
                                <h3 className="text-center mt-5 text-white">{dataSet[index+1] ? dataSet[index+1].song.title : ''}</h3>
                                <p dangerouslySetInnerHTML={{ __html: dataSet[index+1] ? dataSet[index+1].song.lyrics : '' }} className="text-white"></p>
                            </div>
                        </div>
                    </>
                ))}
            </>
        )
    }
    
    return searchData()
}