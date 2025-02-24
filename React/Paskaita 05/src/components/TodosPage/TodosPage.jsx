import { useEffect, useState } from "react"
import { Link } from "react-router"
import styles from "./TodosPage.module.css"

function TodosPage() {
const [todos, setTodos] = useState([])

useEffect(() => {
 const fetchTodos = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    setTodos(data) //.filter(todo => !todo.completed) )
 }
fetchTodos()
}, [])


return (
    <div>
    {todos.length === 0 ? (
        <p>Loading todos...</p>
    ) : (
        <>
            <h1 className={styles.title}>Todos:</h1>

            <ul>
                         {todos
                         .map(todo => (
                    <li key={todo.id} className={`${styles.list} ${todo.completed ? styles.completed : ""}`}>
                        <Link to={`/api/todos/${todo.id}`}>
                        <span className={styles.numberSpan}>{todo.id}. </span> {todo.title} {todo.completed}</Link>
                    </li>
                ))}
            </ul>
        </>
    )}

</div>
)

}
export default TodosPage