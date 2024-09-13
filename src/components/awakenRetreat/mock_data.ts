interface MockData {
	title: string,
	childrens: Children[]
}
interface Children {
	strong: string,
	text: string
}
export const mockData:MockData[] = [
	{
		title: 'Day 1: Arrival & Welcoming Circle',
		childrens: [
			{
				strong: 'Morning/Afternoon:',
				text: 'Arrival and airport transportation to retreat house.'
			},
			{
				strong: 'Evening:',
				text: 'Welcoming circle, gentle yoga session, followed by a plant-based dinner by our private chef Natalie.'
			}
		]
	},
	{
		title: 'Day 2: Awakening Abundance',
		 childrens: [
			{
				strong: 'Morning:',
				text: 'Sunrise yoga with guided meditation and sound healing.'
			},
			{
				strong: 'Mid-Morning:',
				text: 'Plant-based breakfast with local harwest fruits and Kona coffee.'
			},
			{
				strong: 'Late Morning:',
				text: 'Workshop on awakening abundance and self-love.'
			},
			{
				strong: 'Afternoon:',
				text: 'Tour to the newest Kilauea crater with grounding ceremony and setting intentions'
			},
			{
				strong: 'Evening:',
				text: 'Hawalian style vegan dinner and relaxing time: jacuzzi, pool, music, non alcoholic drinks.'
			},
		 ]
	},
	{
		title: 'Day 3: Healing and Transformation',
		childrens: [
			{
				strong: 'Morning:',
				text: 'Energized Fitness Workout with Cold Plunge Experience.'
			},
			{
				strong: 'Mid-Morning:',
				text: 'Hawaiin breakfast'
			},
			{
				strong: 'Late Morning:',
				text: 'Farm Like a Goddess tour to Cacao Farm'
			},
			{
				strong: 'Afternoon:',
				text: 'Hike through the forest reserve to a scenic ocean tide-pools and black sand beach with hot ponds'
			},
			{
				strong: 'Evening:',
				text: 'Full of love dinner with relaxing reflection time and Blue Lotus Tea Circle.'
			},
		]
	},
	{
		title: 'Day 4: Discovering Your Dharma and Awaken',
		childrens: [
			{
				strong: 'Morning:',
				text: 'Vinyasa flow yoga and closing meditation with sound bath and Sadhu Board (nail standing)'
			},
			{
				strong: 'Mid-Morning:',
				text: 'Local style plant-based breakfast by chief Natalie Silva'
			},
			{
				strong: 'Late Morning:',
				text: 'Workshop on discovering your Dharma and setting health goals'
			},
			{
				strong: 'Afternoon:',
				text: 'Breathwork Worshop with special guest breathwork facilitator and life-coach Pati Hoyt.'
			},
			{
				strong: 'Evening:',
				text: 'New Age Mantra live music concert with fireplace reflection and circle meditation.'
			},
			{
				strong: 'Late Evening:',
				text: 'Farewell Delish Dinner by chief with closing meditation.'
			},
		]
	},
	{
		title: 'Day 5: Namaste Departure Day',
		childrens: [
			{
				strong: 'Morning:',
				text: 'Plant-based breakfast and departure to the airport by 11am Hawaii Local Time.'
			}
		]
	}
]