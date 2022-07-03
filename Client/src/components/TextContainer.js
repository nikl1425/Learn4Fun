import React from "react";


export const TextContainer = (props) => {
  
  return (
    <>
    <div className={props.border_color} style={{backgroundColor: props.background_color, border: props.border_color}}>
      <div className={props.txt_placement}>
          {props.children}
      </div>
    </div>
 </>
  )
} 