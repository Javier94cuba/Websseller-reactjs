import React from "react";

export default function Obj_planes(props) {
  return (
    <article id={props.article}>
      <h1>{props.h1}</h1>
      <p className="precio_xl">
        {" "}
        {props.price}
        <strong>{props.cents}</strong> <small>{props.days}</small>{" "}
      </p>
      <p>
        {" "}
        {props.sec1} <br />
        <br /> {props.sec2} <br />
        <br /> {props.sec3}{" "}
      </p>
      <button className={props.class}>{props.leer}</button>
    </article>
  );
}
