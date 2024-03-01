import Image, { StaticImageData } from "next/image";
import Volume from './../assets/volume.png';

interface ColorVariants {
    [key: string]: string;
}

interface ImageData {
    src: StaticImageData;
    alt: string;
}

interface SongData {
    title: string;
    lyrics: string;
}

interface ItemData {
    color: string;
    image: ImageData;
    song: SongData;
    video: string;
    audio: string;
}

interface MidiaProps {
    item: ItemData;
}

export default function Midia({item}:MidiaProps){

    const colorVariants:ColorVariants = {
        lime: 'bg-lime-500',
        blue: 'bg-blue-500',
        cyan: 'bg-cyan-500',
        teal: 'bg-teal-500',
        violet: 'bg-violet-500',
    }

    return(
        <>  
            <div 
                className={`front front_image ${colorVariants[item.color]} border-t-[3px] border-t-${item.color}-400 border-green-200`}>
                <Image src={item.image.src} alt={item.image.alt} className="image_front"></Image>
                {item.video != '' ?  
                    <div>
                    <iframe  
                        src={item.video.replace("watch?v=", "embed/")}  
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    ></iframe>
                </div> 
                : ''}
                {item.audio != '' ?
                    <div>   
                        <Image src={Volume} alt="Audio" className="audio"/>
                        <audio>
                            <source src={item.video} type="audio/mp3" />
                        </audio>
                    </div> 
                    : ''}
            </div>
        </>
    )
}