import { useEffect, useState } from "react"
import { useParams } from "react-router"
import styles from "./UserItem.module.css"

function UserItem() {
    let { userId }  = useParams()
    const [user, setUser] = useState(null)

useEffect(() => {
    const fetchUser = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const data = await res.json()
setUser(data)
 }
 fetchUser()
}, [userId])

if (!user) {
    return <p>Loading user...</p>
}

return (
    <>
    <div className={styles.mainContainer}>
    <div className={styles.user}>
           <p className={styles.numberSpan}>{user.id} </p>
           </div>
    <div className={styles.userContainer}>
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
   
</div>
</div>
</>
)
}

export default UserItem