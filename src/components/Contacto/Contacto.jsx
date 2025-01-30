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
                        <label htmlFor="nombreContacto">Nombre</label>
                        <input type="text" id='nombreContacto' name='nombre' placeholder='Tu nombre' maxLength={30} />
                    </div>

                    <div className={styles.labelAndInputContainer}>
                        <label htmlFor="apellidoContacto">Apellido</label>
                        <input type="text" id='apellidoContacto' name='apellido' placeholder='Tu apellido' maxLength={30} />
                    </div>

                    <div className={styles.labelAndInputContainer}>
                        <label htmlFor="emailContacto">Email</label>
                        <input type="email" id='emailContacto' name='email' placeholder='Tu email' maxLength={80} />
                    </div>

                    <div className={`${styles.labelAndInputContainer} ${styles.codigoContainer}`}>
                        <label htmlFor="codigoContacto">Cod. de área</label>
                        <input type="number" id='codigoContacto' name='codigo' placeholder='Sin 15. Ej: 11' />
                    </div>

                    <div className={`${styles.labelAndInputContainer} ${styles.telefonoContainer}`}>
                        <label htmlFor="telefonoContacto">Teléfono</label>
                        <input type="number" id='telefonoContacto' name='telefono' placeholder='Ej: 1234-5678' />
                    </div>

                    <button className={styles.submitButton} type='submit'>Enviar</button>
                </div>
            </form>
        </section>
    )
}