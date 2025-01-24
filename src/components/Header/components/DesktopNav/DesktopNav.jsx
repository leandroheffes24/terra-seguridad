import styles from './DesktopNav.module.css'

export default function DesktopNav(){
    return(
        <nav className={styles.desktopNav}>
            <div className={styles.contactSection}>
                <p className={styles.contactText}>CONTACTO: <span className={styles.contactPhone}>+54 9 11 2490-4560</span></p>
            </div>

            <ul className={styles.list}>
                <li className={styles.itemList}>
                    <a className={styles.itemLink} href="#">Inicio</a>
                </li>
                <li className={styles.itemList}>
                    <a className={styles.itemLink} href="#">Inicio</a>
                </li>
                <li className={styles.itemList}>
                    <a className={styles.itemLink} href="#">Inicio</a>
                </li>
                <li className={styles.itemList}>
                    <a className={styles.itemLink} href="#">Inicio</a>
                </li>
                <li className={styles.itemList}>
                    <a className={styles.itemLink} href="#">Inicio</a>
                </li>
            </ul>
        </nav>
    )
}