const calculateShelvingLength = (spaceDocument) => {
  const sectionWidthMap = {};
  spaceDocument.design.zones.forEach(zone => {
    zone.sections.forEach(section => {
      sectionWidthMap[section.id] = section.width;
    });
  });
  const shelves = spaceDocument.design.elements.filter(element => element.type.includes('shelf'));
  let totalLength = 0;
  shelves.forEach(shelf => {
    totalLength += sectionWidthMap[shelf.sectionId];
  });
  return Math.round(totalLength / 25.4);
}

export default { calculateShelvingLength };