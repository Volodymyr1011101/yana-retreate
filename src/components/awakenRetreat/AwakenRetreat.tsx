import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import HeaderBackground from '../headerBackground/HeaderBackground';
import ListItemComponent from '../listItemComponent/ListItemComponent';
import { mockData } from './mock_data';
import styles from './styles.module.scss';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AwakenRetreat = () => {
    const main3 = useRef<null | HTMLDivElement>(null);
    useGSAP(
        () => {
            const boxes = gsap.utils.toArray('.list-item3');

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
        { scope: main3 }
    );
    return (
        <div className={`awakenWrapper ${styles.wrapper}`}>
            <HeaderBackground title={'AWAKEN ABUNDANCE RETREAT'} trigger={'awakenWrapper'} componentId={3} />
            <div className={styles.daysList} ref={main3}>
                {mockData.map(item => (
                    <div key={item.title} className={styles.daysListItem}>
                        <h3>{item.title}</h3>
                        <ul className={styles.dayList}>
                            {item.childrens.map(children => (
                                <ListItemComponent key={children.strong} strong={children.strong} text={children.text} componentId={3} className={'item23'} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AwakenRetreat;
