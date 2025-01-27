import styles from './ServiciosYEquipos.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import homeImage from '../../assets/kit1.webp'
import qolsys from '../../assets/qolsys.webp'

export default function ServiciosYEquipos(){
    return(
        <section id='servicios-y-equipos'>
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
                    // gap: '2rem',
                    // padding: '30px',
                    pagination: false
                }}
            >
                <SplideSlide className={styles.card}>
                    <div className={styles.imageAndTitleContainer}>
                        <img className={styles.cardImage} src={homeImage} alt="Kit para hogares ilustrativa" />
                        <h4 className={styles.cardTitle}>Servicio de seguridad para tu hogar</h4>
                    </div>

                    <ul className={styles.cardList}>
                        <li className={styles.itemList}>Kit de alarma completo.</li>
                        <li className={styles.itemList}>Servicio inmediato con policía, bomberos y ambulancia.</li>
                        <li className={styles.itemList}>Opción de agregar una cámara sin costo extra.</li>
                        <li className={styles.itemList}>Soporte las 24 horas del día, los 7 días de la semana.</li>
                        <li className={styles.itemList}>Control total desde la aplicación.</li>
                    </ul>

                    <div className={styles.kitImageContainer}>
                        <img className={styles.kitImage} src={qolsys} alt="Imágen Qolsys" />
                    </div>

                    <div className={styles.contactButtonContainer}>
                        <a className={styles.contactButton} href="#contacto">Conocé más</a>
                    </div>
                </SplideSlide>
            </Splide>
        </section>
    )
}