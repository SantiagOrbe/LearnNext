import {Counter}  from "./Counter"

export default function PostsLayout({children}){
    return(
    <div>
        <marquee style={{background: "#fff",color: "#00008B"}}> Testing and Learning all about Next 13 😎😎😎 </marquee>
        {children}
    </div>
    )
}