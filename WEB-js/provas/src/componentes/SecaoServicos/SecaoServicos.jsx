import React from "react";
import Apresentacao from "../Apresentacao";
import Boxes from "./Boxes/Boxes";
import styles from "./SecaoServicos.module.css"

function SecaoServicos() {
    return (
        <>
            <section className={styles.secaoServico}>
                <Apresentacao titulo="Serviços e Informações" paragrafo="Selecione o assunto desejado"/>
                <Boxes/>
            </section>
        </>
    );
}

export default SecaoServicos;