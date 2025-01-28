import styles from './ServiciosYEquipos.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import homeImage from '../../assets/kit1.webp'
import qolsys from '../../assets/qolsys.webp'
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
                    // breakpoints: {
                    //     767:{
                    //         perPage: 2,
                    //         gap: '1.5rem',
                    //         padding: '20px'
                    //     },
                    //     991:{
                    //         perPage: 3,
                    //         gap: '2rem',
                    //         padding: '25px'
                    //     },
                    //     1199:{
                    //         perPage: 5,
                    //         gap: '1.8rem',
                    //         padding: '20px'
                    //     }
                    // },
                    type: 'loop',
                    perPage: 1,
                    perMove: 1,
                    gap: '2rem',
                    // padding: '30px',
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
                            </ul>

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
            </Splide>
        </section>
    )
}