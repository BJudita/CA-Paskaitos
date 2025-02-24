import { useEffect, useState } from "react"
import { Link } from "react-router"
import styles from "./PhotosPage.module.css"

function PhotosPage() {
const [photos, setPhotos] = useState([])

useEffect(() => {
 const fetchPhotos = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()
    setPhotos(data)
 }
fetchPhotos()
}, [])

return (
    <div>
    {photos.length === 0 ? (
        <p>Loading photos...</p>
    ) : (
        <>
            <h1 className={styles.title}>Photos:</h1>

            <ul className={styles.columnsUl}>
                {photos.map(photo => (
                    <li key={photo.id} className={styles.list}>
                        <Link to={`/api/photos/${photo.id}`}>
                        {/* <div className={styles.imgBox}><img src={photo.url} alt={photo.title} className={styles.image} /></div> */}
                       <p> <span className={styles.numberSpan}>{photo.id}. </span> {photo.title}</p></Link>
                    </li>
                ))}
            </ul>
        </>
    )}

</div>
)

}
export default PhotosPage