import { useEffect, useState } from "react"
// import { Link } from "react-router"
import styles from "./UsersList.module.css"

function UserList() {
const [users, setUsers] = useState([])

useEffect(() => {
 const fetchUsers = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    setUsers(data)
 }
fetchUsers()
}, [])

return (
    <div>
    {users.length === 0 ? (
        <p>Loading users...</p>
    ) : (
        <>
            <h1 className={styles.title}>Users:</h1>

            <ul>
                {users.map(user => (
                    <li key={user.id} className={styles.list}>
                        <p><span className={styles.numberSpan}>{user.id}.</span> {user.name}</p>
                        {/* <Link to={`/api/users/${user.id}`}><span className={styles.numberSpan}>{user.id}.</span> {user.name}</Link> */}
                    </li>
                ))}
            </ul>
        </>
    )}

</div>
)

}
export default UserList