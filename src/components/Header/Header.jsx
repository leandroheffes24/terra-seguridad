import styles from './Header.module.css'
import TerraLogo from '../../assets/blueTerraLogo.webp'
import Nav from './components/MobileNav/MobileNav'
import DesktopNav from './components/DesktopNav/DesktopNav'
import { useState } from 'react'
import { scrollToSection } from '../../utils/scrollToSection'

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    return(
        <header>
            <div className={styles.container}>
                <div className={styles.openMenuIconContainer}>
                    <svg  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.openMenuIcon} onClick={toggleMenu}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </div>

                <div className={styles.logoContainer}>
                    <a href="/" >
                        <img src={TerraLogo} alt="Logo de Terra Seguridad" className={styles.logo}/>
                    </a>
                </div>

                {isMenuOpen && <Nav closeMenu={closeMenu} scrollToSection={scrollToSection}/>}

                <DesktopNav scrollToSection={scrollToSection}/>
            </div>
        </header>
    )
}