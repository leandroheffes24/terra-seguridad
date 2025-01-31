import styles from './Inicio.module.css'
import { useState } from 'react';

export default function Inicio() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const urlScript = import.meta.env.VITE_SCRIPT_URL

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(urlScript, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setMessage("✅ Datos enviados correctamente");
                e.target.reset();
            } else {
                setMessage("✅ Datos enviados correctamente");

            }
        } catch (error) {
            setMessage("❌ No se pudo conectar con el servidor");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.inicioSection} id='inicio'>
            <div className={styles.textoContainer}>
                <p className={styles.text}>PROTEGÉ A TU FAMILIA Y TU HOGAR CON</p>
                <h1 className={styles.title}>TERRA SEGURIDAD</h1>
            </div>

            <div className={styles.formContainer}>
                <div className={styles.formTextContainer}>
                    <p className={styles.formTopText}>ASESORÍA PERSONALIZADA GRATIS</p>
                    <p className={styles.formBottomText}>DESCUBRÍ LO QUE NECESITAS PARA GARANTIZAR SEGURIDAD Y TRANQUILIDAD A TU VIDA.</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
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

                    <button type='submit' className={styles.formSubmitButton} disabled={loading}>
                        {loading ? "Enviando..." : "Solicitar asesoría gratuita"}
                    </button>

                    {message && <p className={styles.formMessage}>{message}</p>}
                </form>
            </div>
        </section>
    );
}
