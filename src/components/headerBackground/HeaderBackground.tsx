import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { animate } from '../../assets/functions/animate';
import './styles.scss';

gsap.registerPlugin(ScrollTrigger);
interface Props {
    title: string;
    trigger: string;
}
const HeaderBackground = ({ title, trigger }: Props) => {
    useEffect(() => {
        animate('left', -200, 'left', 0.7, trigger);
        animate('right', -200, 'right', 0.7, trigger);
        gsap.fromTo(
            '.title',
            {
                opacity: 0
            },
            {
                delay: 0.7,
                opacity: 1
            }
        );
    }, []);
    return (
        <div className="wrapper">
            <div className="left"></div>
            <div className="right"></div>
            <h2 className="title">{title}</h2>
        </div>
    );
};

export default HeaderBackground;
