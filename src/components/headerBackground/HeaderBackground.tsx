import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { animate } from '../../assets/functions/animate';
import './styles.scss';

gsap.registerPlugin(ScrollTrigger);
interface Props {
    title: string;
    trigger: string;
    componentId: number;
}
const HeaderBackground = ({ title, trigger, componentId }: Props) => {
    useEffect(() => {
        animate('left', -200, `left${componentId}`, 0.7, trigger);
        animate('right', -200, `right${componentId}`, 0.7, trigger);
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
            <div className={`left${componentId} left`}></div>
            <div className={`right${componentId} right`}></div>
            <h2 className="title">{title}</h2>
        </div>
    );
};

export default HeaderBackground;
