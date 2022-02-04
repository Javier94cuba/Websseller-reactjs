import React from "react";

export default function Obj_servicios_ofrecidos(props) {
    return (
        <div id="seo">
            <h3>{props.h3}</h3>
            <p>{props.texto}</p>
            <a href="google.com" className="leermas">{props.leer}</a>
        </div>
    )
}