import { Kranky } from "next/font/google";

const kranky = Kranky({ weight: "400", subsets: ["latin"] });

export function Title() {
    return  <h1 className={`title text-center pt-16 ${kranky.className}`}>Manual de cantigas tradicionais</h1>
}