import styles from './Contacto.module.css'

export default function Contacto(){
    return(
        <section className={styles.contactSection} id='contacto'>
            <div className={styles.titleAndSubtitleContainer}>
                <h2>Contacto</h2>
                <h3>Envianos tus datos para que nos comuniquemos con vos</h3>
            </div>

            <form className={styles.form} action="">
                <div className={styles.formTitleContainer}>
                    <h4 className={styles.formTitle}>¡Obtené una asesoría gratis!</h4>
                </div>

                <div className={styles.formInfoContainer}>
                    <div className={styles.labelAndInputContainer}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id='nombre' name='nombre' placeholder='Tu nombre' />
                    </div>

                    <div className={styles.labelAndInputContainer}>
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" id='apellido' name='apellido' placeholder='Tu apellido' />
                    </div>

                    <div className={styles.labelAndInputContainer}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email' placeholder='Tu email' />
                    </div>

                    <div className={`${styles.labelAndInputContainer} ${styles.codigoContainer}`}>
                        <label htmlFor="codigo">Cod. de área</label>
                        <input type="number" id='codigo' name='codigo' placeholder='Sin 15. Ej: 11' />
                    </div>

                    <div className={`${styles.labelAndInputContainer} ${styles.telefonoContainer}`}>
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="number" id='telefono' name='telefono' placeholder='Ej: 1234-5678' />
                    </div>

                    <button className={styles.submitButton} type='submit'>Enviar</button>
                </div>
            </form>
        </section>
    )
}