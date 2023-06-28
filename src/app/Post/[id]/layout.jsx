import Link from "next/link"

const fetchSinglePosts = (id) => { 

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { 
        next: {
            revalidate: 60
        }
     })
     .then(res => res.json()) 
}

export default async function Post ({params, children }) {
    const {id} = params
    const post = await fetchSinglePosts(id)

    return(
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/Post/${id}/comments`}>Ver Comentarios</Link>
          {children}
        </article>
    )


    return <h1>Este es el Post {id}</h1>
}