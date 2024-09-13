import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export const animate = (side: string, range: number, id: string, duration: number, trigger: string) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
        `.${id}`,
        { opacity: 0, [side]: range },
        {
            opacity: 1,
            [side]: 0,
            duration: duration,
            scrollTrigger: {
                trigger: `.${trigger}`, // элемент, который вызывает анимацию
                start: 'top 90%', // когда верхняя часть элемента достигает 80% высоты видимости
                scrub: false
            }
        }
    );
};
