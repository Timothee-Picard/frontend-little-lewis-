const url = process.env.NEXT_PUBLIC_API_URL;

export type MoodboardImage = {
	Visuel: string;
	Top: string;
	Left: string;
	Rotation: string;
	Width: string;
	Height: string;
	Zindex: number;
};

export async function fetchMoodboardImages(): Promise<MoodboardImage[]> {
	try {
		const query =
			'&fields[1]=Top' +
			'&fields[2]=Left' +
			'&fields[3]=Rotation' +
			'&populate[Visuel]=true';

		const response = await fetch(`${url}/api/moodboards?${query}`);
		if (!response.ok) throw new Error('Failed to fetch data from Strapi');
		const res = await response.json();
		return res.data.map((moodboard: any) => {
			return {
				Top: moodboard.attributes.Top || '',
				Left: moodboard.attributes.Left || '',
				Rotation: moodboard.attributes.Rotation || '',
				Visuel: moodboard.attributes.Visuel.data.attributes.url || '',
				Width: moodboard.attributes.Visuel.data.attributes.width || '',
				Height: moodboard.attributes.Visuel.data.attributes.height || '',
				Zindex: moodboard.attributes.Zindex || 0,
			};
		});
	} catch (error) {
		console.error('Error fetching projects:', error);
		return []
	}
}
