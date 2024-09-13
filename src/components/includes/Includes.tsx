import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import Image from '../../assets/images/DF4A7754-D6D8-4C30-8F6A-E8EF99BA8147.webp';
import Vulcano from '../../assets/images/vulcano.webp';
import HeaderBackground from '../headerBackground/HeaderBackground';
import ListItemComponent from '../listItemComponent/ListItemComponent';
import { mockData } from './mock_data';
import styles from './styles.module.scss';

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Includes = () => {
    const main = useRef<null | HTMLUListElement>(null);
    const main2 = useRef<null | HTMLUListElement>(null);
    useGSAP(
        () => {
            const boxes = gsap.utils.toArray('.list-item');
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
    useGSAP(
        () => {
            const boxes = gsap.utils.toArray('.list-item2');
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
        { scope: main2 }
    );
    return (
        <div className={`includesWrapper ${styles.wrapper}`}>
            <HeaderBackground title={"What's Included:"} trigger={'includesWrapper'} componentId={2} />
            <div className={styles.listWrapper}>
                <h3>Before the Retreat:</h3>
                <div className={styles.listItemsWrapper}>
                    <ul className={`${styles.list}`} ref={main}>
                        <li className={`list-item ${styles.listItem}`}>
                            <p>
                                <strong>Personalized Health Coaching Session:</strong> Experience a 50-minute private 1:1 consultation with Avrora Gunko, a
                                plant-based nutritionist and health coach. Avrora will offer tailored, expert guidance to support your unique health and
                                wellness goals, ensuring you're fully prepared to make the most of your retreat. This session, held prior to your arrival, is
                                designed to set a strong foundation for your journey toward transformation.
                            </p>
                        </li>
                        <li className={`list-item ${styles.listItem}`}>
                            <p>
                                <strong>Group Orientation Call with Yana and Avrora:</strong> Join a welcoming Zoom call with your hosts, Yana and Avrora, where
                                you'll receive key retreat information, connect with fellow participants, and have all your questions answered. This pre-retreat
                                gathering will help you feel supported, informed, and excited for the enriching experience awaiting you on the island.
                            </p>
                        </li>
                    </ul>
                    <div className={styles.imageBlock}>
                        <img src={Image} alt="imageAlt" />
                    </div>
                </div>
                <div>
                    <h3>During Retreat:</h3>
                </div>
                <div className={styles.listItemsWrapper}>
                    <ul className={`${styles.retreatList} ${styles.list}`} ref={main2}>
                        {mockData.map(item => (
                            <ListItemComponent strong={item.strong} text={item.text} key={item.strong} componentId={2} className={''}/>
                        ))}
                    </ul>
                    <div className={styles.imageBlock}>
                        <img src={Vulcano} alt="Vulcano" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Includes;
