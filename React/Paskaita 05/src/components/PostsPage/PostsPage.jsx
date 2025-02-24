import { useEffect, useState } from "react"
import { Link } from "react-router"
import styles from "./PostsPage.module.css"

function PostsPage() {
    const [posts, setPosts] = useState([])

useEffect(() => {
    const fetchPosts = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await res.json()
setPosts(data)
 }
 fetchPosts()
}, [])

return (
    <div>
    {posts.length === 0 ? (
        <p>Loading posts...</p>
    ) : (
        <>
            <h1 className={styles.title}>Posts:</h1>

            <ul>
                {posts.map(post => (
                    <li key={post.id} className={styles.list}>
                        <Link to={`/api/posts/${post.id}`}><span className={styles.numberSpan}>{post.id}.</span> {post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )}

</div>
)

}

export default PostsPage