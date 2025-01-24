import styles from './Inicio.module.css'

export default function Inicio(){
    return(
        <section className={styles.inicioSection}>
            <div className={styles.textoContainer}>
                <p className={styles.text}>PROTEGÉ A TU FAMILIA Y TU HOGAR CON <h1 className={styles.title}>TERRA SEGURIDAD</h1></p>
            </div>

            <div className={styles.formContainer}>
                <div className={styles.formTextContainer}>
                    <p className={styles.formTopText}>OBTENÉ UNA ASESORÍA PERSONALIZADA TOTALMENTE GRATIS.</p>
                    <p className={styles.formBottomText}>DESCUBRÍ LO QUE NECESITAS PARA GARANTIZAR SEGURIDAD Y TRANQUILIDAD A TU VIDA.</p>
                </div>
            </div>
        </section>
    )
}