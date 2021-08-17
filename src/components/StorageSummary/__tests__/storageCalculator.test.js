import storageCalculator from '../storageCalculator';

describe('Calculates available storage for each user', () => {
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
        {
          id: 'e4',
          sectionId: 's1',
          type: 'drawerdoubleshallow',
        },
        {
          id: 'e5',
          sectionId: 's1',
          type: 'angledshoeshelf',
        },
      ],
      zones: [
        {
          id: 'z1',
          sections: [
            {
              id: 's1',
              width: 610,
              userId: "u1"
            }
          ]
        }
      ]
    },
  }

  it('should calculate the right amount of shelving in feet/inches', () => {
    
    expect(storageCalculator.calculateShelvingLength(spaceDocument)["u1"]).toEqual("6ft 0in");
  });

  it('should calculate the right amount of hanging in feet/inches', () => {
    
    expect(storageCalculator.calculateHangingLength(spaceDocument)["u1"]).toEqual("2ft 0in");
  });

  it('should calculate the right amount of drawers', () => {
    
    expect(storageCalculator.calculateDrawers(spaceDocument)["u1"]).toEqual(3);
  });

  it('should calculate the right amount shoe space', () => {
    
    expect(storageCalculator.calculateShoeSpace(spaceDocument)["u1"]).toEqual(3);
  });
});