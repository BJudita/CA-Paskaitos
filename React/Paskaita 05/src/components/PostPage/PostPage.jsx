import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import styles from "./PostPage.module.css"

function PostPage() {
    let { postId }  = useParams()
    const [post, setPost] = useState([null])

useEffect(() => {
    const fetchPost = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`) // expand prideda t4vinius embed vaikinius: ?_expand=user&_embed=comments
        const data = await res.json()
setPost(data)
 }
 fetchPost()
}, [postId])

if (!post) {
    return <p>Loading post...</p>
}

// const { user, comments } = post 
// const { name, id } = user

return (
    <div className={styles.container}>
            <span className={styles.numberSpan}>{post.id}.</span>
            {/* <span>Author: 
               <Link  to={`/api/users/${id}`}>{name} </Link></span> */}
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.bodyP}>{post.body}</p>
            {/* <div>
                {comments.map(comment => {

                })}
            </div> */}
    </div>
)
}

export default PostPage