const _ = require("lodash");
const calculateShelvingLength = spaceDocument => {
  const sectionWidthMap = {};
  spaceDocument.design.zones.forEach(zone => {
    zone.sections.forEach(section => {
      sectionWidthMap[section.id] = section.width;
    });
  });
  const shelves = spaceDocument.design.elements.filter(element =>
    element.type.includes("shelf")
  );
  let totalLength = 0;
  shelves.forEach(shelf => {
    totalLength += sectionWidthMap[shelf.sectionId];
  });
  return Math.round(totalLength / 25.4);
};

/*
  element => section => user
  element => section => zone => design
  element => section => zone => wall
*/

const elementsByUser = (spaceDocument, userid) => {
  // find sections belonging to user
  // get elements belonging to section
  const sectionids = _.flatten(
    spaceDocument.design.zones.map(zone => {
      return zone.sections
        .map(section => {
          if (section.userId === userid) {
            return section;
          }
          return null;
        })
        .filter(section => {
          return !!section;
        })
        .map(section => {
          return section.id;
        });
    })
  );

  return spaceDocument.design.elements.filter(element => {
    return sectionids.includes(element.sectionId);
  });
};

/*
  shelves => '*shelf*' and not '*shoe*'
  hanging => '*withrod*'
  shoe => '*shoe*'
  drawer => '*drawer*'
*/

const filterByType = (elements, type) => {
  return elements.filter(element => element.type.includes(type));
};

const sectionMap = spaceDocument => {
  const sectionWidthMap = {};
  spaceDocument.design.zones.forEach(zone => {
    zone.sections.forEach(section => {
      sectionWidthMap[section.id] = section.width;
    });
  });
  return sectionWidthMap;
};

const widthOfShelvesByUser = (spaceDocument, userid) => {
  return widthOfThingsByUser(spaceDocument, userid, 'shelf') - widthOfThingsByUser(spaceDocument, userid, 'angledshoeshelf');
};

const widthOfHangingByUser = (spaceDocument, userid) => {
  return widthOfThingsByUser(spaceDocument, userid, 'withrod');
}

const numberOfDrawersByUser = (spaceDocument, userid) => {
  return filterByType(elementsByUser(spaceDocument, userid), 'drawer').length;
}

const numberOfShoesByUser = (spaceDocument, userid) => {
  return Math.floor(widthOfThingsByUser(spaceDocument, userid, 'shoe')/12.0);
}

const widthOfThingsByUser = (spaceDocument, userid, thing) => {
  const sectionWidthMap = sectionMap(spaceDocument);
  return Math.round(
    filterByType(elementsByUser(spaceDocument, userid), thing).reduce(
      (res, element) => {
        res += sectionWidthMap[element.sectionId];
        return res;
      },
      0
    ) / 25.4
  );
};

export default {
  calculateShelvingLength,
  elementsByUser,
  widthOfShelvesByUser,
  widthOfHangingByUser,
  numberOfDrawersByUser,
  numberOfShoesByUser
};
