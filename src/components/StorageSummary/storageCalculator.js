// Storage Calc

// Calc Shelving Length

const calculateShelvingLength = (spaceDocument) => {
  const shelvingSectionWidthMap = {};
  spaceDocument.design.zones.forEach(zone => {
    zone.sections.forEach(section => {
      shelvingSectionWidthMap[section.id] = section.width;
    });
  });
  const shelves = spaceDocument.design.elements.filter(element => element.type.includes('shelf'));
  let totalShelfingLength = 0;
  shelves.forEach(shelf => {
    totalShelfingLength += shelvingSectionWidthMap[shelf.sectionId];
  });
  return Math.round(totalShelfingLength / 25.4);
}

// Calc calculateHangingLength

const calculateHangingLength = (spaceDocument) => {
  const hangingSectionWidthMap = {};
  spaceDocument.design.zones.forEach(zone => {
    zone.sections.forEach(section => {
      hangingSectionWidthMap[section.id] = section.width;
    });
  });
  const hangingItems = spaceDocument.design.elements.filter(element => element.type.includes('shelfwithrod'));
  let totalHangingLength = 0;
  // console.log(hangingItems);
  hangingItems.forEach(hangingItem => {
    totalHangingLength += hangingSectionWidthMap[hangingItem.sectionId];
  });
  console.log(hangingSectionWidthMap);

  return Math.round(totalHangingLength / 25.4);

  // return 0;

};


export default { calculateShelvingLength, calculateHangingLength };