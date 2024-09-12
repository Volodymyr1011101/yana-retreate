import gsap from 'gsap';
import { useEffect } from 'react';
import { animate } from '../../assets/functions/animate';
import './styles.scss';
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
                opacity: 0,
                color: '#fff'
            },
            {
                delay: 0.7,
                opacity: 1,
                color: '#fff'
            }
        );
    });
    return (
        <div className="wrapper">
            <div className="left"></div>
            <div className="right"></div>
            <h2 className="title">{title}</h2>
        </div>
    );
};

export default HeaderBackground;
