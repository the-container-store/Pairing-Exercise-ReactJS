const calculateShelvingLength = (spaceDocument) => {
  //Obj that holds userId and width for each section
  const sectionWidthMap = {};
  spaceDocument.design.zones.forEach(zone => {
    zone.sections.forEach(section => {
      sectionWidthMap[section.id] = {user: section.userId, width: section.width};
    });
  });

  //Array that contains all shelves in closet
  const shelves = spaceDocument.design.elements.filter(element => element.type.includes('shelf'));

  //Obj that holds total shelves length per user
  let totalLengthPerUser = {};

  //Creates all users for totalLengthPerUser Obj and calculates length per user
  shelves.forEach(shelf => {
    //Initiates user var in totalLengthPerUser obj
    const user = sectionWidthMap[shelf.sectionId].user;
    if(!totalLengthPerUser[user]) totalLengthPerUser[user] = 0;

    //Adds up total shelf length per user
    totalLengthPerUser[user] += sectionWidthMap[shelf.sectionId].width;
  });

  //Gets total shelf length
  let total = 0;
  for(const shelf in totalLengthPerUser){
    //Adds up total from all users
    total += totalLengthPerUser[shelf];
    totalLengthPerUser[shelf] = mmToFeet(totalLengthPerUser[shelf]);
  }

  //Creates total var in totalLengthPerUser Obj
  totalLengthPerUser["total"] = mmToFeet(total);
  
  //returns Obj
  return totalLengthPerUser;
}

const calculateHangingLength = (spaceDocument) => {
  //Obj that holds userId and width for each section
  const sectionWidthMap = {};
  spaceDocument.design.zones.forEach(zone => {
    zone.sections.forEach(section => {
      sectionWidthMap[section.id] = {user: section.userId, width: section.width};
    });
  });

  //Array that contains all hanging spaces in closet
  const hanging = spaceDocument.design.elements.filter(element => element.type.includes('shelfwithrod18'));

  //Obj that holds total hanging length per user
  let totalLengthPerUser = {};

  //Creates all users for totalLengthPerUser Obj and calculates length per user
  hanging.forEach(shelf => {
    //Initiates user var in totalLengthPerUser obj
    const user = sectionWidthMap[shelf.sectionId].user;
    if(!totalLengthPerUser[user]) totalLengthPerUser[user] = 0;

    //Adds up total shelf length per user
    totalLengthPerUser[user] += sectionWidthMap[shelf.sectionId].width;
  });

  //Gets total hanging length
  let total = 0;
  for(const shelf in totalLengthPerUser){
    //Converts from mm to inch
    // totalLengthPerUser[shelf] = Math.round(totalLengthPerUser[shelf] / 25.4);
    //Adds up total from all users
    total += totalLengthPerUser[shelf];
    totalLengthPerUser[shelf] = mmToFeet(totalLengthPerUser[shelf]);
  }

  //Creates total var in totalLengthPerUser Obj
  totalLengthPerUser["total"] = mmToFeet(total);

  //returns Obj
  return totalLengthPerUser;
}

const calculateDrawers = (spaceDocument) => {
  //Obj that holds userId for each section
  const sectionWidthMap = {};
  spaceDocument.design.zones.forEach(zone => {
    zone.sections.forEach(section => {
      sectionWidthMap[section.id] = section.userId;
    });
  });

  //Array that contains all drawers in closet
  const drawers = spaceDocument.design.elements.filter(element => element.type.includes('drawer'));

  //Obj that holds total drawers per user
  let totalDrawersPerUser = {};

  //Creates all users for totalDrawersPerUser Obj and calculates drawers per user
  drawers.forEach(drawer => {
    //Initiates user var in totalDrawersPerUser obj
    const user = sectionWidthMap[drawer.sectionId];
    if(!totalDrawersPerUser[user]) totalDrawersPerUser[user] = 0;
    
    //Adds up total drawers per user based on drawer type
    if(drawer.type === "drawerdoubleshallow"){
      totalDrawersPerUser[user] +=  2;
    } else if(drawer.type === "drawerdeep"){
      totalDrawersPerUser[user] +=  1;
    }
  })

  //Gets total drawers
  let total = 0;

  //Adds up total from all users
  for(const drawer in totalDrawersPerUser){
    total += totalDrawersPerUser[drawer];
  }
  
  //Creates total var in totalDrawerPerUser Obj
  totalDrawersPerUser["total"] = total;

  //returns Obj
  return totalDrawersPerUser;
}

const calculateShoeSpace = (spaceDocument) => {
  //Obj that holds userId and width for each section
  const sectionWidthMap = {};
  spaceDocument.design.zones.forEach(zone => {
    zone.sections.forEach(section => {
      sectionWidthMap[section.id] = {user: section.userId, width: section.width};
    });
  });

  //Array that contains all shoe spaces in closet
  const shoes = spaceDocument.design.elements.filter(element => element.type.includes('shoe'));

  //Obj that holds total shoes per user
  let totalShoesPerUser = {};

  //Creates all users for totalShoesPerUser Obj and calculates total shoes per user
  shoes.forEach(shoe => {
    //Initiates user var in totalShoesPerUser obj
    const user = sectionWidthMap[shoe.sectionId].user;
    if(!totalShoesPerUser[user]) totalShoesPerUser[user] = 0;

    //Adds up total shoe space based on width of section
    const shoeSpaceInch = sectionWidthMap[shoe.sectionId].width / 25.4;
    //If the width is less than 27 inches, 3 shoes can fit
    if(shoeSpaceInch < 27){
      totalShoesPerUser[user] += 3;
    } else {
      //Else if its greater than 27 inches, 4 shoes can fit
      totalShoesPerUser[user] += 4;
    }
  })

  //Gets total shoe space
  let total = 0;

  //Adds up total from all users
  for(const shoe in totalShoesPerUser){
    total += totalShoesPerUser[shoe];
  }

  //Creates total var in totalDrawerPerUser Obj
  totalShoesPerUser["total"] = total;

  //returns Obj
  return totalShoesPerUser;
}

//Converts mm to ft and inch
const mmToFeet = (mm) => {
  const inches = mm / 25.4;
  const feet = Math.floor(inches / 12);
  const remaining = Math.floor(inches % 12);
  return `${feet}ft ${remaining}in`;
}

export default { calculateShelvingLength, calculateHangingLength, calculateDrawers, calculateShoeSpace };