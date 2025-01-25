import styles from './Footer.module.css'
import TerraLogo from '../../assets/whiteTerraLogo.webp'

export default function Footer(){
    return(
        <footer>
            <div className={styles.footerWebsiteSection}>
                <p className={styles.footerSectionName}>Explora el sitio web</p>
                <ul className={styles.footerList}>
                    <li className={styles.footerListItem}><a className={styles.footerItemLink} href="#">Inicio</a></li>
                    <li className={styles.footerListItem}><a className={styles.footerItemLink} href="#">Inicio</a></li>
                    <li className={styles.footerListItem}><a className={styles.footerItemLink} href="#">Inicio</a></li>
                    <li className={styles.footerListItem}><a className={styles.footerItemLink} href="#">Inicio</a></li>
                    <li className={styles.footerListItem}><a className={styles.footerItemLink} href="#">Inicio</a></li>
                </ul>
            </div>

            <div className={styles.footerContactSection}>
                <p className={styles.footerSectionName}>Contactanos</p>
                <ul className={styles.footerList}>
                    <li className={styles.footerListItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.footerContactLogo}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.footerContactLogo}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                        </svg>
                        <span className={styles.footerContactText}>+54 9 11 2490-4560</span>
                    </li>
                    <li className={styles.footerListItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.footerContactLogo}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                            <path d="M3 7l9 6l9 -6" />
                        </svg>
                        <span className={styles.footerContactText}>terraseguridad@gmail.com</span>
                    </li>
                </ul>
            </div>

            <div className={styles.footerLogoSection}>
                <img className={styles.logo} src={TerraLogo} alt="Logo de Terra Seguridad" />
            </div>

            <div className={styles.separator}></div>

            <div className={styles.footerDeveloperAndCopyright}>
                <p className={styles.copyrightText}>Copyright © 2025 terraseguridad.com.ar - todos los derechos reservados</p>
                <p className={styles.developerText}>Sitio web desarrollado por <a className={styles.developerLink} href="https://www.leandroheffes.com.ar/">Leandro Heffes</a></p>
            </div>
        </footer>
    )
}