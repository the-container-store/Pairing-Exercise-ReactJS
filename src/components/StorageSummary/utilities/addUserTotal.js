import { groupElementsBySectionId } from './groupElementsBySectionId'

// Assuming 2112 is the total occupiable height. 2438.4 is the actual 96 inches.
const TOTAL_HEIGHT = 2112 // 2438.4 // 96"
const TWELVE_INCHES_IN_MM = 304.8

const toFeetAndInches = (inches) => {
  const feet = Math.floor(inches / 12)
  const remainingInches = inches % 12
  return `${feet}' ${remainingInches}"`
}

export const shelfWidth = (userShelves, userSections) => {
  const total = userShelves.reduce((final, shelf) => {
    const shelfWidth = userSections.find(section => section.id === shelf.sectionId).width
    return final + shelfWidth
  }, 0)

  return total
}

export const drawerCount = (userDrawers) => {
  return userDrawers.reduce((final, drawer) => {
    return drawer.type.includes('double')
      ? final + 2
      : final + 1
  }, 0)
}

const sortElementsByFloorDistance = (elements) => {
  return elements.sort((a, b) => {
    return a.y - b.y
  })
}

export const hangingHeight = (userDrawers, userShelves) => {
  const sectioned = groupElementsBySectionId(userDrawers, userShelves)
  
  const sorted = Object.entries(sectioned).map(([sectionId, elements]) => {
    return sortElementsByFloorDistance(elements)
  })

  const heights = sorted.map(elements => {
    const {elementsWithHeights} = elements.reduce((final, element, index) => {
      element.height = element.y - final.heightTotal
      final.heightTotal += element.height
      final.elementsWithHeights.push(element)
      return final
    }, { heightTotal: 0, elementsWithHeights: [] })

    return elementsWithHeights.reduce((final, element) => {
      return element.type.includes('rod')
        ? final + element.height
        : final
    }, 0)
  })

  const totalHeight = heights.reduce((final, height) => {
    return final + height
  }, 0)

  return totalHeight
}