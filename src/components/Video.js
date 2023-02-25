import React, { useRef } from 'react';
import styles from '@/styles/Intro.module.css'

function Video() {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div>
      <video className={styles.video} ref={videoRef} onClick={handleVideoClick} autoPlay controlsList="">
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
export default Video;

