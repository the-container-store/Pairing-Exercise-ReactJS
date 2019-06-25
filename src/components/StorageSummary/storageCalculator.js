// import { getHeapSpaceStatistics } from "v8";

const calculateLength = (spaceDocument, userId, type) => {
  const sectionWidthMap = {};

  spaceDocument.design.zones.forEach(zone => {
    zone.sections
      .filter(section => section.userId === userId)
      .forEach(section => {
        sectionWidthMap[section.id] = section.width;
      });
  });
  const shelves = spaceDocument.design.elements.filter(element =>
    element.type.includes(type)
  );
  const hanger = spaceDocument.design.elements.filter(element =>
    element.type.includes("shelfwithrod")
  );
  let totalLenghtSr = 0;
  hanger.forEach(hanger => {
    totalLength += sectionWidthMap[hanger.sectionId] || 0;
  });
  return Math.round(totalLength / 25.4);
};


  let totalLength = 0;
  shelves.forEach(shelf => {
    totalLength += sectionWidthMap[shelf.sectionId] || 0;
  });
  return Math.round(totalLength / 25.4);
};

export default { calculateShelvingLength };
