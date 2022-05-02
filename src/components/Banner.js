import React from "react";
import styles from "../style/header.module.scss";
import fonts from "../style/fonts.scss";


export const Banner = (props) => {
  return (
    <div className="center-block">
      <div className={styles.banner}>
        <div className={styles.text_container}>
          <div className="text-center text-wrap">
            <div className="fs-1">
                  <span className={styles.header_text}>{props.text}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
