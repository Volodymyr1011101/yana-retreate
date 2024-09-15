import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import styles from './styles.module.scss';
gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
    title: string;
    type: 'include' | 'exclude';
    list: string[];
}
const IncludeExcludeList = ({ title, type, list }: Props) => {
    const main = useRef<null | HTMLDivElement>(null);
    useGSAP(
        () => {
            const boxes = gsap.utils.toArray('.animateItem');
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
        <div className={`${styles.wrapper} ${type === 'include' ? styles.includeWrapper : styles.excludeWrapper}`} ref={main}>
            <h4 className="animateItem">{title}</h4>
            <ul className={`${styles.listItems} ${type === 'include' ? styles.includeListItems : styles.excludeListItems}`}>
                {list.map(item => (
                    <li key={item} className={`${styles.listItem} ${type === 'include' ? styles.includeListItem : styles.excludeListItem} animateItem`}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default IncludeExcludeList;
