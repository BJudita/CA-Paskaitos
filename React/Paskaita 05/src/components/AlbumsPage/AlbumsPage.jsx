import { useEffect, useState } from "react"
import { Link } from "react-router"
import styles from "./AlbumsPage.module.css"

function AlbumsPage() {
    const [albums, setAlbums] = useState([])

useEffect(() => {
    const fetchAlbums = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/albums`)
        const data = await res.json()
setAlbums(data)
 }
 fetchAlbums()
}, [])

return (
    <div>
    {albums.length === 0 ? (
        <p>Loading albums...</p>
    ) : (
        <>
            <h1 className={styles.title}>Albums:</h1>


            <ul className={styles.columnsUl}>
                {albums.map(album => (
                    <li key={album.id} className={styles.list}>
                        <Link to={`/api/albums/${album.id}`}><span className={styles.numberSpan}>{album.id}. </span> {album.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )}

</div>
)

}

export default AlbumsPage