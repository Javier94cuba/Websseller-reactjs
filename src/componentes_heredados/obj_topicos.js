import React from "react";

export default function Obj_topicos(props){
    return(
        <article id="salud ">
            <img src={props.image} />
            <h2> {props.h2}</h2>
            <p>{props.texto}</p>
          </article>
    )
}