import Yana from '../../assets/images/yana.png'
import Avrora from '../../assets/images/avrora.webp'

interface Social {
	instagram?: string,
	facebook?: string
}

export interface IOwners {
	photo: string
	name: string
	biography: string
	quote?: string,
	social?: Social
}

export const mockData: IOwners[] = [
	{
		name: 'Yana Garden',
		photo: Yana,
		biography: `<p>Yana Garden is a professional musician, singer, songwriter and soundhealer.  Creator of "New Age Mantra" musical project , “Beyond Sound and Breath" , women circles  and retreats in Hawaii .</p><p>Yana's passion is creating ethereal soundscapes with her voice combined with the sound of authentic sound healing instruments from all over the world : Tibetan and Crystal singing bowls, Gongs, Divya, Handpan, Vargan,drums etc.</p>`,
		quote: "«I believe that everyone has inner wisdom that already has all the answers we are looking for. Your body holds immeasurable wisdom and knowledge, you just need to quiet your mind and let go of control to tap into it.My purpose is to create the environment and safe space for you to let go and tune into your own inner guidance and healer within. “",
		social: {
			instagram: 'https://www.instagram.com/yana.soundgarden?igsh=dzU1bWc1bHA3OGlw&utm_source=qr',
			facebook: 'https://www.facebook.com/Ianasadova?mibextid=LQQJ4d'
		}
	},
	{
		name: 'Avrora Gunko',
		photo: Avrora,
		biography: '<p>Avrora Gunko is a yoga and fitness coach, nutritionist, and 100% natural vegan bikini athlete. Creator of the “Awaken You” program, she combines mindset, spirituality, plant-based nutrition, and fitness to help women live their healthiest and most authentic lives.</p><p>Avrora’s passion lies in guiding women to rediscover the power of their bodies through balanced nutrition, mindful movement, and holistic wellness.</p><p>More information and testimonials read here: <a href="https://avroraprofit.com" target="_blank" rel="noreferrer">https://avroraprofit.com</a></p>',
		quote: '“I believe the body holds immense wisdom and healing potential. When we nourish it with intention and care, we awaken the strength and confidence within. My mission is to create a safe, supportive space where women can heal, grow, and step fully into their vibrant selves.”',
		social: {
			instagram: 'https://www.instagram.com/avroraveganfit?igsh=MXNzMHBvMmdpNGk2OQ=='
		}
	}
]