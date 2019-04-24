// const calculateShelvingLength = (spaceDocument) => {
//   const sectionWidthMap = {};
//   spaceDocument.design.zones.forEach(zone => {
//     zone.sections.forEach(section => {
//       sectionWidthMap[section.id] = section.width;
//     });
//   });
//   const shelves = spaceDocument.design.elements.filter(element => element.type.includes('shelf'));
//   let totalLength = 0;
//   shelves.forEach(shelf => {
//     totalLength += sectionWidthMap[shelf.sectionId];
//   });
//   return Math.round(totalLength / 25.4);
// }



const calculateShelvingLength = (spaceDocument) => {
  const users = spaceDocument.design.users;
  const elements = spaceDocument.design.elements;
  let sections = [];
  users.forEach(user=>{
    let userSections = [];

    spaceDocument.design.zones.forEach(zone=>{
      zone.sections.forEach(section => 
        {
          if(section.userId === user.id){
            userSections.push(section)
          }
        }
        )
    })



    
      sections.push({userName:user.name,userId:user.id,userSections:userSections})
  })

  let elementLengths = [];
  sections.forEach(section =>{
    let total = 0
    elements.forEach(element => {
      if(section.id === element.sectionId && element.type.includes("shelf")){
        total += section.width;
      }
    })
  })

  sections.forEach(section => {
    let total = 0
    section.userSections.forEach(userSection =>{
      elements.forEach(element => {
        if(userSection.id === element.sectionId && element.type.includes("shelf")){
          total += userSection.width;
        }
      })

    })
    section.totalShelves = Math.round(total / 25.4);
  })

  return sections

}

export default { calculateShelvingLength };

