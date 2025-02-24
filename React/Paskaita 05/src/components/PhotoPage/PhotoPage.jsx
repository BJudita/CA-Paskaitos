import { useEffect, useState } from "react"
import { useParams } from "react-router"
import styles from "./PhotoPage.module.css"

function PhotoPage() {
    let { photoId }  = useParams()
    const [photo, setPhoto] = useState([null])

useEffect(() => {
    const fetchPhoto = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        const data = await res.json()
setPhoto(data)
 }
 fetchPhoto()
}, [photoId])

if (!photo) {
    return <p>Loading photo...</p>
}

return (
    <div className={styles.mainContainer}>
            <div className={styles.imgBox}>
                <img src={photo.url} alt={photo.title} className={styles.image} />                </div>
            
            <h1 className={styles.title}>{photo.id}. {photo.title}</h1>
    </div>
)
}

export default PhotoPage