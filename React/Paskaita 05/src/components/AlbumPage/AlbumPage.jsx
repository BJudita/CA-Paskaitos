import { useEffect, useState } from "react"
import { useParams } from "react-router"
import styles from "./AlbumPage.module.css"

function AlbumPage() {
    let { albumId }  = useParams()
    const [album, setAlbum] = useState([null])

useEffect(() => {
    const fetchAlbum = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
        const data = await res.json()
setAlbum(data)
 }
 fetchAlbum()
}, [albumId])

if (!album) {
    return <p>Loading album...</p>
}

return (
    <>
    <div className={styles.mainContainer}>
            <span className={styles.numberSpan}>{album.id}</span>
            <h2 className={styles.title}>{album.title}</h2>
    </div>
    </>
)
}

export default AlbumPage