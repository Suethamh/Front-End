import React from "react";
import style from "./Apresentacao.module.css"

function Apresentacao(props) {
    return (
        <>
            <section className={style.apresentacao}>
                <h2>{props.titulo}</h2>
                <p>{props.paragrafo}</p>    
            </section>
        </>
    );
}

export default Apresentacao;