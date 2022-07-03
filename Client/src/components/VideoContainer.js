import React from "react";
import styles from "../style/video.module.scss";


export const VideoContainer = (props) => {

  let videoLink = "";

  if(props.embedLink){
    videoLink = props.embedLink;
  } else {
    videoLink = "MISSING VIDEO EMBED ID";
  }

/*

<iframe width="560" height="315" src="https://www.youtube.com/embed/a_Kvz1DArTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/
  return (
    <div className={styles.big_vod}>
      <iframe
      title="embed youtube"
      frameBorder="0" 
      width="100%"
      height="100%"
      allowFullScreen
      src="https://www.youtube.com/embed/wyoCxzRLUsQ" />
    </div>
  )
}