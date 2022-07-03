import React from "react";


export const contentSize = (open) => {
  if(open){
    return {
      width: "70%",
      marginLeft: "30%",
      height: "100%",
      position: "fixed",
      transition: "width 10s"
    }
  }
  return {
    width: "100%",
    marginLeft: "0%",
    height: "100%",
    position: "fixed",
    transition: "width 10s"
  }
}

export const transitionSize = (open) => {
  if(open){
    return "c.content"
  }
  return "c.content.open"
}

