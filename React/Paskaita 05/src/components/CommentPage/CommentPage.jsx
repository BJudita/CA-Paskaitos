import { useEffect, useState } from "react"
import { useParams } from "react-router"
import styles from "./CommentPage.module.css"

function CommentPage() {
    let { commentId }  = useParams()
    const [comment, setComment] = useState([null])

useEffect(() => {
    const fetchComment = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        const data = await res.json()
setComment(data)
 }
 fetchComment()
}, [commentId])

if (!comment) {
    return <p>Loading comments...</p>
}

return (
    <div className={styles.mainContainer}>
            <div className={styles.emailContainer}>
                <div>
            <span className={styles.numberSpan}>{comment.id}.</span>
            </div><div><p className={styles.emailP}>{comment.email}</p>
            </div></div>
            <h1 className={styles.title}>{comment.name}</h1>
            <p className={styles.bodyP}>{comment.body}</p>
    </div>
)
}

export default CommentPage