export const shelvesNoUsers = {
	design: {
		elements: [
			{
				id: 'e1',
				sectionId: 's1',
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
					}
				]
			}
		]
	},
};

export const shelvesWithUsers = {
		design: {
			elements: [
				{
					id: 'e1',
					sectionId: 's2',
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
					type: 'drawerdeep',
				},
			],
			zones: [
				{
					id: 'z1',
					sections: [
						{
							id: 's2',
							width: 600,
					    userId: "u1"
						}
					]
				}
			]
		},
	};