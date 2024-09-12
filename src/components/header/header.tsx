import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
interface Props {
	title: string,
	subtitle?: string,
	date: string,
	location: string
}
const HeaderComponent = ({title, subtitle, date, location}: Props) => {
const mainBlockRef = useRef<null | HTMLDivElement>(null)

useEffect(() => {
	gsap.fromTo('.textBlock', {
		autoAlpha: 0,
		y: -200
	}, {
		autoAlpha: 1,
		y: 0,
		duration: 1
	})
}, [])
return (
	<div className={styles.wrapper}>
		<div className={`${styles.textBlock} textBlock`}>
			<h1>{title}</h1>
			<p>{subtitle}</p>
			<div className={styles.dateLoc}>
				<span className={styles.span}>Dates: {date}</span>
				<span className={styles.span}>Location: {location}</span>
			</div>
		</div>
	</div>
)
}

export default HeaderComponent