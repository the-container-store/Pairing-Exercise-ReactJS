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

export {
  calculateShelvingLength,
  calculateHangingShelvingLength,
  calculateShoeSpace,
  calculateDrawerSpace
};