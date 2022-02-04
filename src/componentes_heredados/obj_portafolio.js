import React from "react";

export default function Obj_Portafolio(props){
    return(
        <article>
          <div className={props.image}></div>
          <p> {props.nombre}<br /> {props.info} </p>
        </article>
    )
}