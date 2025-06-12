import React from "react";
import styles from "./Boxes.module.css"

function Boxes() {

    const boxes = [
        {texto: "Plano de Desenvolvimento Institucional"},
        {texto: "Pesquisa Pública Processos IFTM"},
        {texto: "Licitações e Contratos"},
        {texto: "Receitas e Despesas"},
        {texto: "Dados abertos"},
        {texto: "Trasnparência e Prestação de Servico"},
        {texto: "Servidores"},
        {texto: "Perguntas Frequentes"}
    ]

    function showBoxes(){
        return(
            <>
                {boxes.map(box => <div>{box.texto}</div>)}
            </>
        )
    }

    return (
        <>
            <div className={styles.container}>
                {showBoxes()}</div>            
        </>
    );
}

export default Boxes;