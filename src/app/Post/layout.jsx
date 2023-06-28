import {Counter}  from "./Counter"

export default function PostsLayout({children}){
    return(
        <div>
            <marquee  style={{background: "#fff",color: "#00008B"}}>Funny Posts</marquee>
            {children}
        </div>
    )
}