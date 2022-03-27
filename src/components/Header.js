import React from "react";
import styles from "../style/header.module.scss";


export const Header = (props) => {
  return (

    <div className={styles.banner}>
      <div className={styles.text_container}>
        <div className={styles.header_text}>
              {props.text}
        </div>
      </div>
      
    </div>
   
  )
}
