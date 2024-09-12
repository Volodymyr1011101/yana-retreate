import { useEffect } from 'react';
import { animate } from '../../assets/functions/animate';
import Image from '../../assets/images/745C9FEC-E4CC-4344-8834-D0E767C8C65A.webp';
import HeaderBackground from '../headerBackground/HeaderBackground';
import styles from './styles.module.scss';
const AboutRetreat = ({ trigger }: { trigger: string }) => {
    useEffect(() => {
        animate('left', -200, 'leftText', 1, trigger);
        animate('right', -200, 'imageBlock', 1, trigger);
    }, []);
    return (
        <div className={styles.wrapper}>
            <HeaderBackground title={'About the Retreat:'} trigger={styles.wrapper} />
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
