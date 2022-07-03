import React from "react";
import { Heading } from "./Heading";
import "../style/fonts.scss";

export const CourseThumpNail = (props) => {

  let fontStyle = (!props.font_type) ? "font_main" : props.font_type;

  return (
    <div className="mx-5 text-center" style={{
      background: props.banner_background,
      border: props.border_color
      }}>
      <div className="py-3" style={{height: "200px", display: "flex"}}>
        <img src={window.location.origin + props.path} width={props.img_width} height={props.img_height} style={{margin: "auto"}}/>
      </div>
      <div className="pb-1">
        <Heading>
          <h3 className={`${fontStyle}`} 
          style={
            {
              color: props.font_color,
              fontWeight: props.font_weight
            }}>
              {props.title}
          </h3>
        </Heading >
      </div>
      <div>
        <h5 style={
            {
              color: "white",
              fontWeight: props.font_weight
            }}>
          {props.sub_heading}
        </h5>
        <div style={{height: "75px", display: "flex"}}>
          <span style={
              {
                color: "white",
                fontWeight: props.font_weight,
                
              }}>
            {props.description}
          </span>
        </div>
      </div>
    </div>
  )
}