import Pati from '../../assets/images/IMG_8757.webp';
import Natalie from '../../assets/images/IMG_8759.webp';
import HeaderBackground from '../headerBackground/HeaderBackground';
import styles from './styles.module.scss';
const CoFacilitator = () => {
    return (
        <div className={`${styles.wrapper} co-facilitator-wrapper`}>
            <HeaderBackground title={'Co-Facilitator'} trigger={'co-facilitator-wrapper'} componentId={10} />
            <div className={styles.coFacilitatorWrapper}>
                <div className={styles.coFacilitator}>
                    <div className={styles.imageBlock}>
                        <img src={Pati} alt="Pati" />
                    </div>
                    <div className={styles.description}>
                        <h4 className={styles.name}>Pati Hoyt</h4>
                        <p>
                            Pati Hoyt is a Heart Soul Ascension Healer dedicated to guiding individuals on transformative journeys. She leads retreats, women's
                            circles, Pu'uwai breathwork experiences, energy healing session, and various types of ceremonies. She loves helping people connect
                            deeply with their inner selves, align with their soul's calling, heart’s desires, and embrace holistic well-being. She focuses on
                            empowering individuals to uncover their inner light, overcome obstacles, and live with greater joy, peace, and purpose.
                        </p>
                    </div>
                </div>
                <div className={styles.coFacilitator}>
                    <div className={styles.imageBlock}>
                        <img src={Natalie} alt="Natalie" />
                    </div>
                    <div className={styles.description}>
                        <h4 className={styles.name}>Private chef Natalie Silva:</h4>
                        <p>
                            Natalie is an internationally renowned plant-based chef known for her high vibrational, nutrient-dense dishes. Specializing in
                            vegan, vegetarian, and gluten-free cuisine, she brings a rich and flavorful palette to every meal.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoFacilitator;
