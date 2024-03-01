import Image from "next/image";

interface ArrowProps {
  onClick: () => void;
  alt: string;
  direction: "left" | "right";
}

export function Arrow({ alt, direction, onClick }: ArrowProps) {
  
  const directions = {
    left: "/arrow_left.png",
    right: "/arrow_rigth.png",
  };

  return (
    <div className="flex justify-center mx-3 items-center h-14 w-14 cursor-pointer rounded-full hover:bg-gray-800 duration-500">
      <Image
        src={directions[direction]}
        width={35}
        height={35}
        alt={alt}
        onClick={onClick}
      />
    </div>
  );
}
