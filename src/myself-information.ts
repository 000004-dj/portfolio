export const info: MyselfInformation = {
	profile: {
		name: 'Samuil Prytchyn',
		description: 'I am a frontend web developer.I can provide clean code and pixel perfect design.I also make website more & more interactive with web animations.',
		links: {
			linkedin: 'https://www.linkedin.com/in/samuil-prytchyn-a16a63265',
			whatsup: 'https://wa.me/48731380234',
			github: 'https://github.com/000004-dj',
			telegram: 'https://t.me/SamPritt'
		},
		age: '24 Years',
		nationality: 'Belarusian',
		languages: 'Polish, Belarusian, Ukrainian, Russian, English',
		address: 'Poland, Gdańsk, aleja Rzeczypospolitej 4, 80-369',// @ts-ignore
		sidebarFooter: '@2024' + 'Samuil Prytchyn'
	},
	services: [
		{
			title: 'React Developer',
			text: 'React developer React developer React developer React developer React developer React developer React developer',
		},
		{
			title: 'React Developer',
			text: 'React developer React developer React developer React developer React developer React developer React developer',
		},
		{
			title: 'React Developer',
			text: 'React developer React developer React developer React developer React developer React developer React developer',
		}
	],
	reviews: [
		{
			author: 'Andrii Chevdar',
			authorPositions: 'Middle Web Developer',
			testimonial: 'Very good specialist. Have fine developer skills in every his project'
		},
		{
			author: 'Serhei Chevdar',
			authorPositions: 'Middle Web Developer',
			testimonial: 'Very good specialist. Have fine developer skills in every his project'
		},
		{
			author: 'Lukasz Chevdar',
			authorPositions: 'Middle Web Developer',
			testimonial: 'Very good specialist. Have fine developer skills in every his project'
		}
	],
	resume: {
		skills: [
			{ title: 'HTML', percentage: 95 },
			{ title: 'JavaScript', percentage: 95 },
			{ title: 'TypeScript', percentage: 90 },
			{ title: 'React', percentage: 100 },
			{ title: 'Next', percentage: 90 },
		],
		workExperience: [
			{
				fromYear: '2024',
				toYear: 'Present',
				workPlace: 'WEB Developer',
				companyName: 'AI24',
				description: 'Tworzenie projektów opartych na AI (GptChat),' +
					' CRM, LANDING Page i innych projektów firmy. ' +
					'Część frontendowa w React lub Next z TypeScript.'
			},
			{
				fromYear: '2022',
				toYear: '2022',
				workPlace: 'WEB Developer',
				companyName: 'IT-Incubator',
				description: 'Staże w firmie IT-INCUBATOR, ' +
					'tworzenie interfejsu użytkownika dla ' +
					'aplikacji za pomocą Next i TypeScript. ' +
					'Aplikacja społecznościowa z możliwością ' +
					'przesyłania zdjęć, wideo, audio, płatności ' +
					'za dodatkowe funkcje, ustawień profilu i nie tylko.'
			},
			{
				fromYear: '2022',
				toYear: '2023',
				workPlace: 'WEB Developer',
				companyName: 'Start-up "Vertical search engine"',
				description: 'Wertykalna wyszukiwarka, agregator. ' +
					'Tworzenie interfejsu w React (redux), formularze ' +
					'logowania, rejestracja, konto klienta z użyciem ' +
					'biblioteki Material UI.'
			},
		]
	},

};

interface MyselfInformation {
	profile: {
		name: string
		description: string
		links: {
			linkedin: string
			whatsup: string
			github: string
			telegram: string
		}
		age: string
		nationality: string
		languages: string
		address: string
	},
	services: Array<{
		title: string
		text: string
	}>,
	reviews: Array<{
		testimonial: string;
		author: string;
		authorPositions: string;
	}>
	sidebarFooter: string,
	resume: {
		skills: { title: string, percentage: number }[],
		workExperience: {
			fromYear: string,
			toYear: string,
			workPlace: string,
			companyName: string,
			description: string
		}[]
	}
}