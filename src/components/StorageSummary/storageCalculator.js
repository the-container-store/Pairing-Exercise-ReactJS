const calculateShelvingLength = (spaceDocument) => {
  const sectionWidthMap = {};
  spaceDocument.design.zones.forEach(zone => {
    zone.sections.forEach(section => {
      sectionWidthMap[section.id] = section.width;
    });
  });
  const shelves = spaceDocument.design.elements.filter(element => element.type.includes('shelf'));
  let totalLength = 0;
  const byUser= shelves.reduce((p,shelf)  => {
    const section = spaceDocument.design.zones.reduce((p,c)=>p.concat(c.sections),[])
      .find(v=>v.id===shelf.sectionId);
    const userId=section.userId;

    p[userId] = p[userId] || 0;
    p[userId]+=sectionWidthMap[shelf.sectionId]
    totalLength += sectionWidthMap[shelf.sectionId];
    return p;
  },{});
  return [byUser, totalLength];
}

const calculateHangingLength = (spaceDocument) => {
 console.log(spaceDocument);

 const sectionWidthMap = {};
  spaceDocument.design.zones.forEach(zone => {
    zone.sections.forEach(section => {
      sectionWidthMap[section.id] = section.width;
    });
  });
  const hanging = spaceDocument.design.elements
    .filter(element => element.type.includes('shelfwithrod18'));

  let totalLength = 0;
  const byUser= hanging.reduce((p,rod)  => {
    const section = spaceDocument.design.zones.reduce((p,c)=>p.concat(c.sections),[])
      .find(v=>v.id===rod.sectionId);
    
    const userId=section.userId;

    p[userId] = p[userId] || 0;
    p[userId]+=sectionWidthMap[rod.sectionId]
    totalLength += sectionWidthMap[rod.sectionId];
    return p;
  },{});

  return [byUser, totalLength];
}

export default { calculateShelvingLength, calculateHangingLength };