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
		biography: '<p>Avrora Gunko, health and fitness coach, plant-based nutritionist, and professional athlete. She combines her yoga fitness approach and holistic nutrition knowledge to help women find peace within and shine from the inside out.</p>',
		social: {
			instagram: 'https://www.instagram.com/avroraveganfit?igsh=MXNzMHBvMmdpNGk2OQ=='
		}
	}
]