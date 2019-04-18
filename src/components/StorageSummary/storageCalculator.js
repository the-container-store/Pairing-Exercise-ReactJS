const isRelated = (sections) => {
  const ids = sections.map(section => section.id)

  return (shelf) => {
    return ids.includes(shelf.sectionId)
  }
}

const calculateShelvingLength = (spaceDocument) => {

  const { users, zones, elements } = spaceDocument.design

  const userStuff = users.reduce((final, user) => {
    const uid = user.id

    const sections = zones.map(zone => {
      return zone.sections
    }).flat()

    const userSections = sections.filter(section => {
      return  uid === section.userId
    })

    const checkRelation = isRelated(userSections)
    const shelves = elements.filter(element => element.type.includes('shelf') && checkRelation(element) )

    const shelfWidths = shelves.reduce((fin, shelf) => {
      const foo = userSections.find(section => section.id === shelf.sectionId).width
      return fin += foo
    }, 0)

    final[user.id] = {
      shelves: Math.round(shelfWidths / 25.4), 
    }

    return final
  }, {})

  return userStuff
}

export default { calculateShelvingLength };