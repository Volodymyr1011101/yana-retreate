import { useEffect } from 'react';
import { animate } from '../../assets/functions/animate';
import Image from '../../assets/images/8445883D-1573-4D6E-8671-527B0D7C5123.webp';
import HeaderBackground from '../headerBackground/HeaderBackground';
import styles from './styles.module.scss';
const AboutRetreat = ({ trigger }: { trigger: string }) => {
    useEffect(() => {
        animate('left', -200, 'leftText', 1, trigger);
        animate('right', -200, 'imageBlock', 1, trigger);
    }, []);
    return (
        <div className={`${styles.wrapper} aboutTrigger`}>
            <HeaderBackground title={'About the Retreat:'} trigger={'aboutTrigger'} componentId={0} />
            <div className={styles.textBlock}>
                <div className={`${styles.text} leftText`}>
                    <p>
                        This retreat is designed to help women tap into their energy of abundance, fall in love with themselves, relax and rejuvenate, heal past
                        trauma, discover Dharma (life purpose), achieve fitness goals and improve health. Each day will include a mix of yoga, meditation,
                        fitness, sound healing, and adventure, all while enjoying the beauty of Hawaii.
                    </p>
                </div>
                <div className={`${styles.image} imageBlock`}>
                    <img src={Image} alt="leader" />
                </div>
            </div>
        </div>
    );
};

export default AboutRetreat;
