import Image, { StaticImageData } from "next/image"

interface Props {
    flipped: boolean
    totalPages: number
    src: StaticImageData
    alt: string
    title: string
    text: string
    color: string
}

export default function Page({ flipped, totalPages, src, alt, title, text, color }: Props) { 
    function backClass(color: string): string {
        return `back bg-${color}-400`
    }
    function frontClass(color: string): string {
        return `front bg-${color}-400`
    }
    return <>
        <div className={flipped ? "flip flipped" : "flip"} style={flipped ? {zIndex : (totalPages - 5).toString()} : {zIndex: (totalPages + 5).toString()}}>
            <div className={frontClass(color)}>
              <span>8</span>
              <Image src={src} alt={alt}></Image>
            </div>
            <div className={backClass(color)}>
              <span>9</span>
              <h3 className="text-center mt-1 text-black-100">{title}</h3>
              <p className="p-5" dangerouslySetInnerHTML={{ __html: text }}></p>
            </div>
          </div>
    </>
}