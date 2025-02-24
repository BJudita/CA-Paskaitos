import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router"
import styles from "./UserPage.module.css"

function UserPage() {
    let { userId }  = useParams()
    const [user, setUser] = useState(null)

useEffect(() => {
    const fetchUser = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums&_embed=todos`)
        const data = await res.json()
setUser(data)
 }
 fetchUser()
}, [userId])

if (!user) {
    return <p>Loading user...</p>
}

// add other api info
const { posts, albums, todos, } = user


return (
    <>
    <div className={styles.mainContainer}>
    <div className={styles.user}>
           <p className={styles.numberSpan}>{user.id} </p>
           </div>
    <div className={styles.userContainer}>
    <div className={styles.albumBox}>
    <h2>Albums:</h2> 
    <div className={styles.albumsContainer}> 
        {albums.map(album => (
            <div key={album.id} className={styles.albumItem}>
                <Link to={`/api/albums/${album.id}`}>
                <h3>✔️ {album.title}</h3>
                </Link>
            </div>
        ))}
    </div>
</div>  
   <div>
           <div className={styles.userBox}>
                <p  className={styles.info}><strong> Name: </strong> {user.name} </p>     
                <p  className={styles.info}><strong> Username: </strong> {user.username}</p> 
                <p  className={styles.info}><strong> Email: </strong> {user.email}</p> 
                <p  className={styles.info}><strong> Phone: </strong> {user.phone}</p>
                <p  className={styles.info}><strong> Address: </strong>{user.address.suite}, {user.address.street}, {user.address.city}</p>
                </div>
                <div className={styles.company}>
                <p  className={styles.info}><strong> Company: </strong> {user.company.name}</p>
                <p  className={styles.address}>{user.company.catchPhrase}, <br />{user.company.bs}</p>         
    </div></div>
        </div>    
  
    <div className={styles.infoContainer}>
   <div className={styles.postBox}>
   <h2>Posts:</h2>
   <div>
                    {posts.map(post => (
                        <div key={post.id} className={styles.post}>
                                <Link to={`/api/posts/${post.id}`}>
                            <h3>{post.title}</h3>
                             <p>{post.body}</p>
                             </Link>
                        </div>
                    ))}
        </div>
</div>
<div className={styles.todos}>
    <h2>Todos:</h2>
    <ul> 
        {todos.map(todo => (
            <li 
                key={todo.id} 
                className={`${styles.list} ${todo.completed ? styles.completed : ""}`}
            >
                <Link to={`/api/todos/${todo.id}`}> 
                    <span className={styles.todoSpan}> {todo.id}.</span> {todo.title}
                </Link>
            </li>
        ))}
    </ul>
</div>
</div>
</div>
</>
)
}

export default UserPage