import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import Image1 from '../../assets/images/1.webp';
import Image2 from '../../assets/images/2.webp';
import Image3 from '../../assets/images/3.webp';
import Image4 from '../../assets/images/4.webp';
import Image5 from '../../assets/images/5.webp';
import Image6 from '../../assets/images/6.webp';
import Image8 from '../../assets/images/ocean2.webp';
import Image7 from '../../assets/images/vulcano.webp';
import HeaderBackground from '../headerBackground/HeaderBackground';
import styles from './styles.module.scss';
gsap.registerPlugin(useGSAP, ScrollTrigger);

const MoreAboutRetreat = () => {
    const main = useRef<null | HTMLDivElement>(null);

    useGSAP(
        () => {
            const boxes = gsap.utils.toArray('.more-listItem');
            boxes.forEach(box => {
                gsap.fromTo(
                    //@ts-ignore
                    box,
                    {
                        opacity: 0,
                        x: -200
                    },
                    {
                        x: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: box,
                            start: 'bottom bottom',
                            end: 'top 20%',
                            scrub: false
                            // markers: true,
                        }
                    }
                );
            });
        },
        { scope: main }
    );
    return (
        <div className={`${styles.wrapper} more-wrapper`}>
            <HeaderBackground title={'more about the retreat'} trigger={'more-wrapper'} componentId={9} />
            <div ref={main}>
                <ul className={styles.moreList}>
                    <li className={`${styles.moreItem} more-listItem`}>
                        <p>
                            <strong>Luxury Accommodations:</strong>
                            Enjoy 5 days and 4 nights in a stunning estate with ocean views, a saltwater pool, spa hot tub, lush gardens, and breathtaking
                            sunrises-the perfect setting for relaxation and renewal.
                        </p>
                        <img src={Image1} alt="image1" />
                    </li>
                    <li className={`${styles.moreItem} more-listItem`}>
                        <p>
                            <strong>Nourishing Plant-Based Meals:</strong>
                            Delight in organic, locally sourced meals designed to energize and heal. Join our cooking class to learn how to bring these healthy
                            recipes into your everyday life.
                        </p>
                        <img src={Image2} alt="Image2" />
                    </li>
                    <li className={`${styles.moreItem} more-listItem`}>
                        <p>
                            <strong>Daily Morning Movement:</strong>
                            Start each day with yoga or mindful movement against the backdrop of Hawaii's beautiful landscape. Or, feel free to sleep in and
                            enjoy a slow morning.
                        </p>
                        <img src={Image3} alt="Image3" />
                    </li>
                    <li className={`${styles.moreItem} more-listItem`}>
                        <p>
                            <strong>Wellness Classes & Workshops:</strong>
                            Participate in holistic health classes and hands-on workshops like cacao-making, creative art, and sound healing for mental and
                            emotional renewal.
                        </p>
                        <img src={Image4} alt="image4" />
                    </li>
                    <li className={`${styles.moreItem} more-listItem`}>
                        <p>
                            <strong>Island Adventures:</strong>
                            Explore Volcanoes , black sand beaches, and volcanic hot ponds with our guided excursions.
                        </p>
                        <img src={Image7} alt="Image7" />
                    </li>
                    <li className={`${styles.moreItem} more-listItem`}>
                        <p>
                            <strong>Supportive Environment:</strong>
                            Relax and recharge in a safe, welcoming space designed for your personal growth.
                        </p>
                        <img src={Image5} alt="Image5" />
                    </li>
                    <li className={`${styles.moreItem} more-listItem`}>
                        <p>
                            <strong>Flexible Schedule:</strong>
                            All activities are optional, except for our nightly Family Dinners. Choose how much or how little you want to engage for a truly
                            personalized experience.
                        </p>
                        <img src={Image6} alt="Image6" />
                    </li>
                    <li className={`${styles.moreItem} more-listItem`}>
                        <p>
                            <strong>Discover abundance,</strong>
                            nurture your soul, and embrace transformation in paradise!
                        </p>
                        <img src={Image8} alt="Image8" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MoreAboutRetreat;
