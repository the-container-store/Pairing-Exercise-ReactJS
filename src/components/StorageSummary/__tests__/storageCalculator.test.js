import {calculateShelvingLength} from '../storageCalculator';

describe('Calculates available storage for each user', () => {
  it('should calculate the right amount of shelving in inches', () => {
    const spaceDocument = {
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
                width: 610
              }
            ]
          }
        ]
      },
    }
    expect(calculateShelvingLength(spaceDocument)).toEqual(48);
  });
});