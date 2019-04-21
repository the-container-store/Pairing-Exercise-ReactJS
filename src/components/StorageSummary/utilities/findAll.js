
export const sections = (zones) => {
  return zones.map(zone => {
    return zone.sections
  }).flat()
}

export const shelves = (elements) => {
  return elements.filter(element => {
    return element.type.includes('shelf')
  })
}

export const drawers = (elements) => {
  return elements.filter(element => {
    return element.type.includes('drawer')
  })
}

export const shelvesWithRods = (elements) => {
  return elements.filter(element => {
    return element.type.includes('shelfwithrod')
  })
}
