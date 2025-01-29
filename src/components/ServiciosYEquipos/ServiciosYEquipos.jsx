import styles from './ServiciosYEquipos.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import homeImage from '../../assets/kit1.webp'
import comercioImage from '../../assets/kit2.webp'
import galponImage from '../../assets/kit3.webp'
import qolsys from '../../assets/qolsys.webp'
import climax from '../../assets/climax.webp'
import { scrollToSection } from '../../utils/scrollToSection';

export default function ServiciosYEquipos(){
    return(
        <section className={styles.serviciosYEquiposSection} id='servicios-y-equipos'>
            <div className={styles.titleAndSubtitleContainer}>
                <h2>Servicios y equipos disponibles</h2>
                <h3>Nuestros equipos para tu tranquilidad.</h3>
            </div>

            <Splide
                className={styles.cardsContainer}
                options={{
                    type: 'loop',
                    perPage: 1,
                    perMove: 1,
                    gap: '2rem',
                    pagination: false,
                }}
            >
                <SplideSlide className={styles.card}>
                    <div className={styles.container}>
                        <div className={styles.imageContainer}>
                            <img className={styles.cardImage} src={homeImage} alt="Kit para hogares ilustrativa" />
                        </div>

                        <div className={styles.infoContainer}>
                            <h4 className={styles.cardTitle}>Servicio de seguridad para tu hogar</h4>

                            <ul className={styles.cardList}>
                                <li className={styles.cardItemList}>Kit de alarma completo.</li>
                                <li className={styles.cardItemList}>Servicio inmediato con policía, bomberos y ambulancia.</li>
                                <li className={styles.cardItemList}>Opción de agregar una cámara sin costo extra.</li>
                                <li className={styles.cardItemList}>Soporte las 24 horas del día, los 7 días de la semana.</li>
                                <li className={styles.cardItemList}>Control total desde la aplicación.</li>
                                <li className={styles.cardItemList}>Botón de pánico en casos de emergencia para alertar a las autoridades.</li>
                                <li className={styles.cardItemList}>Batería de emergencia que mantiene la alarma activa en caso de corte eléctrico.</li>
                            </ul>
                        </div>

                        <div className={styles.kitImageAndContactButtonContainer}>
                            <div className={styles.kitImageContainer}>
                                <img className={styles.kitImage} src={qolsys} alt="Imágen Qolsys" />
                            </div>

                            <div className={styles.contactButtonContainer}>
                                <button className={styles.contactButton} >
                                    <a className={styles.contactLink} href="#contacto" onClick={scrollToSection}>Conocé más</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide className={styles.card}>
                    <div className={styles.container}>
                        <div className={styles.imageContainer}>
                            <img className={styles.cardImage} src={comercioImage} alt="Kit para comercios ilustrativa" />
                        </div>

                        <div className={styles.infoContainer}>
                            <h4 className={styles.cardTitle}>Servicio de seguridad para tu comercio</h4>

                            <ul className={styles.cardList}>
                                <li className={styles.cardItemList}>Kit de alarma completo adaptado a comercios.</li>
                                <li className={styles.cardItemList}>Servicio inmediato con policía, bomberos y ambulancia.</li>
                                <li className={styles.cardItemList}>Opción de agregar una cámara sin costo extra.</li>
                                <li className={styles.cardItemList}>Soporte las 24 horas del día, los 7 días de la semana.</li>
                                <li className={styles.cardItemList}>Control total desde la aplicación.</li>
                                <li className={styles.cardItemList}>Botón de pánico en casos de emergencia para alertar a las autoridades.</li>
                                <li className={styles.cardItemList}>Batería de emergencia que mantiene la alarma activa en caso de corte eléctrico.</li>
                            </ul>
                        </div>

                        <div className={styles.kitImageAndContactButtonContainer}>
                            <div className={styles.kitImageContainer}>
                                <img className={styles.kitImage} src={climax} alt="Imágen Climax" />
                            </div>

                            <div className={styles.contactButtonContainer}>
                                <button className={styles.contactButton} >
                                    <a className={styles.contactLink} href="#contacto" onClick={scrollToSection}>Conocé más</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide className={styles.card}>
                    <div className={styles.container}>
                        <div className={styles.imageContainer}>
                            <img className={styles.cardImage} src={galponImage} alt="Kit para galpones ilustrativa" />
                        </div>

                        <div className={styles.infoContainer}>
                            <h4 className={styles.cardTitle}>Servicio de seguridad para tu galpón</h4>

                            <ul className={styles.cardList}>
                                <li className={styles.cardItemList}>Kit de alarma completo adaptado a galpónes y depósitos.</li>
                                <li className={styles.cardItemList}>Servicio inmediato con policía, bomberos y ambulancia.</li>
                                <li className={styles.cardItemList}>Opción de agregar una cámara sin costo extra.</li>
                                <li className={styles.cardItemList}>Soporte las 24 horas del día, los 7 días de la semana.</li>
                                <li className={styles.cardItemList}>Control total desde la aplicación.</li>
                                <li className={styles.cardItemList}>Botón de pánico en casos de emergencia para alertar a las autoridades.</li>
                                <li className={styles.cardItemList}>Batería de emergencia que mantiene la alarma activa en caso de corte eléctrico.</li>
                            </ul>
                        </div>

                        <div className={styles.kitImageAndContactButtonContainer}>
                            <div className={styles.kitImageContainer}>
                                <img className={styles.kitImage} src={climax} alt="Imágen Climax" />
                            </div>

                            <div className={styles.contactButtonContainer}>
                                <button className={styles.contactButton} >
                                    <a className={styles.contactLink} href="#contacto" onClick={scrollToSection}>Conocé más</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </section>
    )
}