import { useRef } from "react";
import ReactPlayer from "react-player";
import styles from "./Player.module.css"

export default function Player() {     
const playerRef = useRef(null); // Laikys nuoroda i video

 // Funkcija, kuri pradeda laikmatį
 const playVideo =  () => {
    if (playerRef.current) {
        playerRef.current.seekTo(0); 
        playerRef.current.getInternalPlayer().playVideo();
    }
 };

 // Funkcija, kuri sustabdo laikmatį
 const pauseVideo = () => {
    if (playerRef.current) {
        playerRef.current.getInternalPlayer().pauseVideo();
    }
 };


 // i6 naujo paleis video
 const restartVideo = () => {
    if (playerRef.current) {
        playerRef.current.seekTo(0);
      }
  };
  return (
    <div className={styles.playerContainer}>
           <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=eJlN9jdQFSc"
        width="600px"
        height="340px"
        controls
        playing={false} // Ensures video does not autoplay
      />
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
        <button onClick={restartVideo}>Restart</button>
      </div>
    </div>
    )
};
