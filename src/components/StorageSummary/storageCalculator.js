const convInToFt = (ins) => {
  const feet = Math.floor(ins / 12);
  const inches = ins % 12;
  return feet + "' " + inches + '"';
};
// elements have a y value that measure how far they are from the floor in millimeters.
// I can't get my head around this data. I'm data dizzy or object disoriented.

// address >1 user
const calculateShelvingLength = (spaceDocument, user) => {
  console.log("user in storage calc: ");
  console.log(user);
  // sectionWidthMap: obj of sections. key val pairs are id:width
  // zones array. in zones is sections arr
  const sectionWidthMap = {};
  spaceDocument.design.zones.forEach((zone) => {
    zone.sections.forEach((section) => {
      if (section.userId === user) {
        sectionWidthMap[section.id] = section.width;
      } else {
        return;
      }
    });
  });

  // filter for arr of shelves => arr of just shelves
  const shelves = spaceDocument.design.elements.filter((element) =>
    element.type.includes("shelf")
  );

  let totalLength = 0;
  // add up the shelves. but length and width?
  shelves.forEach((shelf) => {
    totalLength += sectionWidthMap[shelf.sectionId];
  });

  //25.4ml === 1in
  // getting NaN when I have an arr of > 1 el
  return Math.round(totalLength / 25.4);
};
const calculateShoeShelfLength = (spaceDocument, user) => {
  // 8" per pair?
  const sectionWidthMap = {};
  spaceDocument.design.zones.forEach((zone) => {
    zone.sections.forEach((section) => {
      if (section.userId === user) {
        sectionWidthMap[section.id] = section.width;
      } else {
        return;
      }
    });
  });
  const angledShelves = spaceDocument.design.elements.filter((element) =>
    element.type.includes("angled")
  );
  // add only those in same s then div by 8
  // then sum that

  // space 1 only has s2. 600 * 2. 1200/25.4 = 47" / 8" = round down. 5 pairs.
  // space 1 only has s2. 600 * 2. 1200/203 also 5p but closer to 6.

  // need to keep sections sep
  let holdingArr = [];
  angledShelves.forEach((shelf) => {
    let tempMap = {};
    tempMap["section"] = shelf.sectionId;
    tempMap["length"] = sectionWidthMap[shelf.sectionId];
    // console.log(sectionWidthMap[shelf.sectionId] );// >1 logs undef and that leads to NaN
    holdingArr.unshift(tempMap);
  });
  console.log(holdingArr);
  const result = Array.from(
    holdingArr.reduce(
      (m, { section, length }) =>
        m.set(section, (m.get(section) || 0) + length),
      new Map()
    ),
    ([section, length]) => ({ section, length })
  );

  console.log("result from Shoe Shelf");
  console.log(result);
  const pairs = result.map(item => Math.round(item.length / 203.2))
  console.log( pairs);
  return pairs

};

const calculateDrawersLength = (spaceDocument, user) => {
  const sectionWidthMap = {};
  spaceDocument.design.zones.forEach((zone) => {
    zone.sections.forEach((section) => {
      if (section.userId === user) {
        sectionWidthMap[section.id] = section.width;
      } else {
        return;
      }
    });
  });

  const drawers = spaceDocument.design.elements.filter((element) =>
    element.type.includes("drawer")
  );

  return Math.round(drawers.length);
};

export default {
  convInToFt,
  calculateShelvingLength,
  calculateDrawersLength,
  calculateShoeShelfLength,
};
