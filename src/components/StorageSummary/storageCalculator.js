import { calculateTotals } from './utilities/calculateTotals'
import * as findUserRelated from './utilities/findUserRelated'
import * as findAll from './utilities/findAll'
import * as addUserTotal from './utilities/addUserTotal'

export const calculateUserStorage = (spaceDocument) => {
  const { users, zones, elements } = spaceDocument.design

  const sections = findAll.sections(zones)
  const shelves = findAll.shelves(elements)
  const drawers = findAll.drawers(elements)

  const usersData = users.map((user) => {
    const userSections = findUserRelated.sections(user.id, sections)
    const userSectionIds = userSections.map(section => section.id)

    const userDrawers = findUserRelated.drawers(user.id, userSectionIds, drawers)
    const userShelves = findUserRelated.shelves(user.id, userSectionIds, shelves)

    const totalShelfWidth = addUserTotal.shelfWidth(userShelves, userSections)
    const totalDrawerCount = addUserTotal.drawerCount(userDrawers)
    const totalHangingHeight = addUserTotal.hangingHeight(userDrawers, userShelves)

    return {
      name: user.name,
      totalShelfWidth,
      totalDrawerCount,
      totalHangingHeight
    }
  })

  return [...usersData, calculateTotals(usersData)]
}

