import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useState } from 'react'

import room10 from '../../assets/images/room10.webp'
import room3 from '../../assets/images/room3.webp'
import room5 from '../../assets/images/room5.webp'
import room7 from '../../assets/images/room7.webp'
import room8 from '../../assets/images/room8.webp'
import room9 from '../../assets/images/room9.webp'
import HeaderBackground from '../headerBackground/HeaderBackground'
import styles from './styles.module.scss'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const BookNow = () => {
    const [show, setShow] = useState<boolean>(false)
    const main = useRef<null | HTMLDivElement>(null);
    const handleCLick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>):void => {
        e.stopPropagation()
        e.preventDefault()
        const body = document.querySelector('body')
        body?.classList.toggle('show')
        body?.addEventListener('click', (e) => {
            e.stopPropagation()
            setShow(false)
            body.classList.remove('show')
        })
        setShow(!show)
    }
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
        <div className={`wrapperBookNow ${styles.mainWrapper}`} ref={main}>
            <div className={`${styles.paymentBlock} ${show ? styles.show : null}`} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={(e) => handleCLick(e)}>X</button>
                <h3 className={styles.headerInfo}>Payment Info</h3>
                <span className={styles.paymentSpan}>To secure your spot please send a 500$ deposit via Zelle using this email address <a href="mailto: yanagarden79@gmail.com">yanagarden79@gmail.com</a></span>
                <span className={styles.paymentSpan}>If you have questions please contact us at the following email address <a href="mailto: hawaiimanaretreat@gmail.com">hawaiimanaretreat@gmail.com</a></span>
            </div>
            <HeaderBackground title={'Join Now and Choose Your Room:'} trigger={'wrapperBookNow'} componentId={11} />
            <div>
                <h2>Save 500$ with early bird price (book before 10/10/2024)</h2>
            </div>
            <div className={styles.wrapper}>
                <div className={`${styles.room} animateItem`}>
                    <div className={styles.text}>
                        <h3>Single Private Room $2999 per person (after October 10th $3499)</h3>
                        <a href="/" className={styles.bookButton} onClick={(e) => handleCLick(e)}>
                            Book Now
                        </a>
                    </div>
                    <div className={styles.images}>
                        <img src={room8} alt="room" />
                        <img src={room10} alt="room" />
                    </div>
                </div>
                <div className={`${styles.room} animateItem`}>
                    <div className={styles.text}>
                        <h3>Shared room with 1-2 others (separate beds with a private space) $2699 (after October 10th $3199)</h3>
                        <a href="/" className={styles.bookButton} onClick={(e) => handleCLick(e)}>
                            Book Now
                        </a>
                    </div>
                    <div className={styles.images}>
                        <img src={room7} alt="room" />
                        <img src={room5} alt="room" />
                    </div>
                </div>
                <div className={`${styles.room} animateItem`}>
                    <div className={styles.text}>
                        <h3>Shared King Bed with your sis $1899 per person (after October 10th $2399)</h3>
                        <a href="/" className={styles.bookButton} onClick={(e) => handleCLick(e)}>
                            Book Now
                        </a>
                    </div>
                    <div className={styles.images}>
                        <img src={room9} alt="room" />
                        <img src={room3} alt="room" />
                    </div>
                </div>
                <span className={styles.addDescription}>(all other experiences, food and tranportaton included in any accomodatioon option)</span>
                <span className={styles.addDescription}>BOOK NOW with Deposit $500 to save your spot</span>
                <div className={styles.warning}>
                    <h3 className={styles.importantInfo}>Important:</h3>
                    <div className={styles.importantBlock}>
                        <h4>Refund policy:</h4>
                        <ul className={styles.importantList}>
                            <li>Full refund if cancelled prior to 90 days before the event starts.</li>
                            <li>50% refund 60 days from event starts.</li>
                            <li>No refund 30 or less days from event.</li>
                            <li>Fully refundable at any time if a replacement is found</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNow;
