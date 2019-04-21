export const groupElementsBySectionId = (...elementLists) => {
  const elements = elementLists.flat()
  
  return elements.reduce((final, element) => {
    const {sectionId} = element

    if (final[sectionId]) {
      final[sectionId].push(element)
      return final
    }

    final[sectionId] = [element]
    return final
  }, {})
}