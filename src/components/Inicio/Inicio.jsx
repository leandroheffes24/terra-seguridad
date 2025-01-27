import styles from './Inicio.module.css'

export default function Inicio(){
    return(
        <section className={styles.inicioSection} id='inicio'>
            <div className={styles.textoContainer}>
                <p className={styles.text}>PROTEGÉ A TU FAMILIA Y TU HOGAR CON <h1 className={styles.title}>TERRA SEGURIDAD</h1></p>
            </div>

            <div className={styles.formContainer}>
                <div className={styles.formTextContainer}>
                    <p className={styles.formTopText}>ASESORÍA PERSONALIZADA GRATIS</p>
                    <p className={styles.formBottomText}>DESCUBRÍ LO QUE NECESITAS PARA GARANTIZAR SEGURIDAD Y TRANQUILIDAD A TU VIDA.</p>
                </div>
                <form className={styles.form} action="">
                    <div className={styles.formLabelAndInputContainer}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id='nombre' name='nombre' placeholder='Tu nombre' required />
                    </div>
                    <div className={styles.formLabelAndInputContainer}>
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" id='apellido' name='apellido' placeholder='Tu apellido' required />
                    </div>
                    <div className={styles.formLabelAndInputContainer}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email' placeholder='Tu email' required />
                    </div>
                    <div className={`${styles.formLabelAndInputContainer} ${styles.areaCodeContainer}`}>
                        <label htmlFor="codigo">Cod. de área</label>
                        <input type="number" id='codigo' name='codigo' placeholder='Sin 15. Ej: 11' required />
                    </div>
                    <div className={`${styles.formLabelAndInputContainer} ${styles.phoneContainer}`}>
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="number" id='telefono' name='telefono' placeholder='Ej: 1234-5678' required />
                    </div>

                    <button type='submit' className={styles.formSubmitButton}>Solicitar asesoría gratuita</button>
                </form>
            </div>
        </section>
    )
}