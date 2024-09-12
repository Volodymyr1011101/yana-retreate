import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
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
                start: 'top 80%', // когда верхняя часть элемента достигает 80% высоты видимости
                end: ' += 500',
                toggleActions: 'play none none none' // настройки действий при прокрутке (play, pause, reverse и т.д.)
            }
        }
    );
};
