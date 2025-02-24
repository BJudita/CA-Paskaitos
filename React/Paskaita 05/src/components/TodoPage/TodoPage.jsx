import { useEffect, useState } from "react"
import {  useParams } from "react-router"
import styles from "./TodoPage.module.css"

function TodoPage() {
    let { todoId }  = useParams()
    const [todo, setTodo] = useState([null])

useEffect(() => {
    const fetchTodo = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`) // expand prideda t4vinius embed vaikinius: ?_expand=user&_embed=comments
        const data = await res.json()
setTodo(data)
 }
 fetchTodo()
}, [todoId])

if (!todo) {
    return <p>Loading todos...</p>
}


return (
    <div className={styles.container}>
            <span className={styles.numberSpan}>{todo.id}.</span>
            <h1 className={styles.title}>{todo.title}</h1>
            <p className={styles.bodyP}>{todo.body}</p>
      
    </div>
)
}

export default TodoPage