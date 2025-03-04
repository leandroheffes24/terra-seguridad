import styles from './DesktopNav.module.css'
import PropTypes from 'prop-types'

export default function DesktopNav({scrollToSection}){
    return(
        <nav className={styles.desktopNav}>
            <div className={styles.contactSection}>
                <p className={styles.contactText}>CONTACTO: <span className={styles.contactPhone}>+54 9 11 2484-4357</span></p>
            </div>

            <ul className={styles.list}>
                <li className={styles.itemList}>
                    <a className={styles.itemLink} href="#inicio" onClick={scrollToSection}>Inicio</a>
                </li>
                <li className={styles.itemList}>
                    <a className={styles.itemLink} href="#que-ofrecemos" onClick={scrollToSection}>¿Qué ofrecemos?</a>
                </li>
                <li className={styles.itemList}>
                    <a className={styles.itemLink} href="#servicios-y-equipos" onClick={scrollToSection}>Servicios y equipos</a>
                </li>
                <li className={styles.itemList}>
                    <a className={styles.itemLink} href="#contacto" onClick={scrollToSection}>Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

DesktopNav.propTypes = {
    scrollToSection: PropTypes.func.isRequired
};