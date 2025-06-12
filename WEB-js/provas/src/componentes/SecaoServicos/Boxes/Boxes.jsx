import React from "react";
import styles from "./Boxes.module.css"

function Boxes() {

    const boxes = [
        {texto: "Eleicao do Conselho Superior", imagem: "../../../../assets/check-to-slot-solid.svg"},
        {texto: "Estude no IFTM", imagem: "../../../../assets/graduation-cap-solid.svg"},
        {texto: "Editais", imagem: "../../../../assets/file-solid.svg"}
    ]

    function showBoxes(){
        return(
            <>
                {boxes.map(box => <div><img src={box.imagem}/>{box.texto}</div>)}
            </>
        )
    }   


    return (
        <>
            <div className={styles.container}>{showBoxes()}</div>
        </>
    );
}

export default Boxes;