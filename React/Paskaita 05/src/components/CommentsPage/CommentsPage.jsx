import { useEffect, useState } from "react"
import { Link } from "react-router"
import styles from "./CommentsPage.module.css"

function CommentsPage() {
const [comments, setComments] = useState([])

useEffect(() => {
 const fetchComments = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()
    setComments(data)
 }
fetchComments()
}, [])

return (
    <div>
    {comments.length === 0 ? (
        <p>Loading comments...</p>
    ) : (
        <>
            <h1 className={styles.title}>Comments:</h1>

            <ul>
                {comments.map(comment => (
                    <li key={comment.id} className={styles.list}>
                        <Link to={`/api/comments/${comment.id}`}><span className={styles.numberSpan}>{comment.id}.</span> {comment.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )}

</div>
)

}
export default CommentsPage