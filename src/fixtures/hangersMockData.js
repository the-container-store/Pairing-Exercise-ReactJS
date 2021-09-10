export const hangerNoUsers = {
	design: {
		elements: [
			{
				id: 'e2',
				sectionId: 's1',
				type: 'shelfwithrod18',
			},
			{
				id: 'e3',
				sectionId: 's1',
				type: 'shelfwithrod18',
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

export const hangerWithUsers = {
	design: {
		elements: [
			{
				id: 'e1',
				sectionId: 's5',
				type: 'shelf18',
			},
			{
				id: 'e2',
				sectionId: 's1',
				type: 'shelfwithrod18',
			},
			{
				id: 'e3',
				sectionId: 's1',
				type: 'shelfwithrod18',
			},
			{
				id: 'e4',
				sectionId: 's1',
				type: 'shelfwithrod18',
			},
		],
		zones: [
			{
				id: 'z1',
				sections: [
					{
						id: 's1',
						width: 600,
						userId: 'u1'
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