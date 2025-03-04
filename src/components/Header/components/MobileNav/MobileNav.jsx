import styles from './MobileNav.module.css'
import PropTypes from 'prop-types'


export default function Nav({closeMenu, scrollToSection}){
    const handleLinkClick = (e) => {
        console.log("event => ", e);
        closeMenu()
        scrollToSection(e)
    }

    return(
        <nav className={styles.mobileNav}>
            <div className={styles.closeMenuIconContainer}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.closeMenuIcon} onClick={closeMenu}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg>
            </div>

            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <a className={styles.itemLink} href="#inicio" onClick={handleLinkClick}>Inicio</a>
                </li>
                <li className={styles.listItem}>
                    <a className={styles.itemLink} href="#que-ofrecemos" onClick={handleLinkClick}>¿Qué ofrecemos?</a>
                </li>
                <li className={styles.listItem}>
                    <a className={styles.itemLink} href="#servicios-y-equipos" onClick={handleLinkClick}>Servicios y equipos</a>
                </li>
                <li className={styles.listItem}>
                    <a className={styles.itemLink} href="#contacto" onClick={handleLinkClick}>Contacto</a>
                </li>
            </ul>

            <div className={styles.navSeparator}></div>

            <div className={styles.navInformation}>
                <p>Contacto: <span className={styles.navInformationPhone}>+54 9 11 2484-4357</span></p>
            </div>
        </nav>
    )
}

Nav.propTypes = {
    closeMenu: PropTypes.func.isRequired,
    scrollToSection: PropTypes.func.isRequired
};