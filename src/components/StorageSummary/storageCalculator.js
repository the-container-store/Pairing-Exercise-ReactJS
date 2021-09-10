const getSectionWidthMap = (spaceDocument, userId) => {
  const sectionWidthMap = {};
  spaceDocument.design.zones.forEach(zone => {
    zone.sections.forEach(section => {
      if (section.userId === userId) {
        sectionWidthMap[section.id] = section.width;
      }
    });
  });
  return sectionWidthMap;
};


const calculateShelvingLength = (spaceDocument, userId) => {
  const sectionWidthMap = getSectionWidthMap(spaceDocument, userId)
  const shelves = spaceDocument.design.elements.filter(element => element.type.includes('shelf'));
  let totalLength = 0;
  shelves.forEach(shelf => {
    const width = sectionWidthMap[shelf.sectionId] || 0;
    totalLength += width;
  });
  return Math.round(totalLength / 25.4);
};

const calculateHangingShelvingLength = (spaceDocument, userId) => {
  const sectionWidthMap = getSectionWidthMap(spaceDocument, userId)
  const elements = spaceDocument.design.elements
  const hangingShelves = elements.filter(element => element.type.includes('shelf') && element.type.includes('rod'));
  let totalLength = 0;
  hangingShelves.forEach(shelf => {
    const width = sectionWidthMap[shelf.sectionId] || 0;
    totalLength += width;
  });
  return Math.round(totalLength / 25.4);
};

const calculateShoeSpace = (spaceDocument, userId) => {
  const sectionWidthMap = getSectionWidthMap(spaceDocument, userId)
  const elements = spaceDocument.design.elements
  const shoes = elements.filter(element => element.type.includes('shoe'))
  let shoeSpace = 0;
  shoes.forEach(shelf => {
    const width = sectionWidthMap[shelf.sectionId] || 0;
    shoeSpace += width;
  });
  return Math.floor(shoeSpace / 25.4 / 8);
};

const calculateDrawerSpace = (spaceDocument, userId) => {
  const sectionWidthMap = getSectionWidthMap(spaceDocument, userId)
  const elements = spaceDocument.design.elements
  const drawers = elements.filter(element => element.type.includes('drawer'))
  let drawerSpace = 0;
  drawers.forEach(shelf => {
    if (sectionWidthMap[shelf.sectionId]) {
      const drawerAmt = shelf.type.includes('double') ? 2 : 1
      drawerSpace += drawerAmt;
    }
  });
  return drawerSpace;
};

/**
 * Display unit in either inches or feet
 * @param {number} value - value in inches
 * @param {String='in','ft'} unit - unit to display 
 * @returns {String}
 *  a string of the final unit to display
 */
function unitToDisplay(value = 0, unit = 'in') {
  const ftSymbol = '\u2032';
  const inchSymbol = '\u2033';

  if (unit === 'ft') {
    const ftToInches = Math.floor(value / 12);
    const inchesRemainder = value % 12;
    return `${ftToInches}${ftSymbol} ${inchesRemainder}${inchSymbol}`
  } else {
    return `${value}${inchSymbol}`
  }
};

export {
  calculateShelvingLength,
  calculateHangingShelvingLength,
  calculateShoeSpace,
  calculateDrawerSpace,
  unitToDisplay
};