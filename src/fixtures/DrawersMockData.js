export const drawerNoUsers = {
	design: {
		elements: [
			{
				id: 'e2',
				sectionId: 's1',
				type: 'drawerdoubleshallow',
			},
			{
				id: 'e3',
				sectionId: 's1',
				type: 'drawerdoubleshallow',
			},
			{
				id: 'e4',
				sectionId: 's1',
				type: 'drawerdeep',
			},
		],
		zones: [
			{
				id: 'z1',
				sections: [
					{
						id: 's1',
						width: 600
					},
					{
						id: 's2',
						width: 600
					},
					{
						id: 's3',
						width: 600
					}
				]
			}
		]
	},
};

export const drawerWithUsers = {
	design: {
		elements: [
			{
				id: 'e2',
				sectionId: 's1',
				type: 'drawerdoubleshallow',
			},
			{
				id: 'e3',
				sectionId: 's1',
				type: 'drawerdoubleshallow',
			},
			{
				id: 'e4',
				sectionId: 's3',
				type: 'drawerdeep',
			},
		],
		zones: [
			{
				id: 'z1',
				sections: [
					{
						id: 's1',
						width: 600
					},
					{
						id: 's2',
						width: 600
					},
					{
						id: 's3',
						width: 600,
						userId: 'u1'
					}
				]
			}
		]
	},
};

