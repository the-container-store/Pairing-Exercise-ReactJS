export const sections = (userId, sections) => {
  return sections.filter(section => {
    return userId === section.userId
  })
}

export const shelves = (userId, userSectionIds, shelves) => {
  return shelves.filter(shelf => {
    return userSectionIds.includes(shelf.sectionId)
  })
}

export const drawers = (userId, userSectionIds, drawers) => {
  return drawers.filter(drawer => {
    return userSectionIds.includes(drawer.sectionId)
  })
}

export const shelvesWithRods = (userId, userSectionIds, rods) => {
  return rods.filter(rod => {
    return userSectionIds.includes(rod.sectionId)
  })
}