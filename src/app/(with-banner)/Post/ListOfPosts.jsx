import { LikeButton } from "./LikeButton.jsx"
import Link from "next/link"
const fetchPosts = () => { 
    console.log("FETCHING DATOS")
    console.log("😁")

    return fetch("https://jsonplaceholder.typicode.com/posts", { 
        next: {
            revalidate: 60
        }
     })
     .then(res => res.json()) 
}

export async function ListOfPosts() {
    const Post = await fetchPosts()
   

return Post.slice(0, 5).map(post =>(
    <article key={post.id}>
        <Link style={{ textDecoration: 'none', color: 'white' }} href={`/Post/${post.id}`}>
            <h2 style={{color: "#09f"}}>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id={post.id}/>
        </Link>
    </article>
))

} 
