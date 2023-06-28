import Imagen from "next/image";
import { Inter } from 'next/font/google';
import Image from "next/image"



export default function Home() {
    return (
      <div style={{display: "flex"}}>
      <section>
        <Image src="/Imagenes/twitter-card.png" width={800} height= {400} />
      </section>
      </div>
    )
}
   