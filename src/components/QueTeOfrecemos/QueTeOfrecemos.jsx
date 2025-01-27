import styles from './QueTeOfrecemos.module.css'

export default function QueTeOfrecemos(){
    return(
        <section className={styles.queTeOfrecemosSection}>
            <div className={styles.titleAndSubtitleContainer}>
                <h2>¿Qué te ofrece Terra Seguridad?</h2>
                <h3>Conocé las ventajas que te brindamos para tu seguridad.</h3>
            </div>

            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={styles.cardLogo}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                    </svg>
                    <p className={styles.cardText}>Monitoreo constante para que siempre estés protegido. Respuesta inmediata ante cualquier emergencia.</p>
                </div>

                <div className={styles.card}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={styles.cardLogo}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
                    </svg>
                    <p className={styles.cardText}>Nuestro equipo de expertos se encarga de instalar y configurar todo para que funcione a la perfección desde el primer día.</p>
                </div>

                <div className={styles.card}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={styles.cardLogo}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                        <path d="M7 14l3 -3l2 2l3 -3l2 2" />
                    </svg>
                    <p className={styles.cardText}>Adaptamos nuestras soluciones a tus necesidades y presupuesto. ¡Seguridad accesible para todos!</p>
                </div>

                <div className={styles.card}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={styles.cardLogo}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                        <path d="M11 4h2" />
                        <path d="M12 17v.01" />
                    </svg>
                    <p className={styles.cardText}>Controlá tu seguridad desde tu smartphone con las últimas innovaciones tecnológicas.</p>
                </div>

                <div className={styles.card}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={styles.cardLogo}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                        <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                        <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                        <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                    </svg>
                    <p className={styles.cardText}>Estamos siempre disponibles para ayudarte y resolver cualquier inconveniente.</p>
                </div>

                <div className={styles.card}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={styles.cardLogo}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                    <p className={styles.cardText}>Actuamos de inmediato ante cualquier alerta, conectándote con los servicios de emergencia en segundos.</p>
                </div>
            </div>
        </section>
    )
}