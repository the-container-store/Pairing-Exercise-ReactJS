import { toFeetAndInches } from './toFeetAndInches'

const addTotalShelfWidth = (usersData) => {
  return usersData.reduce((final, user) => {
    return final + user.totalShelfWidth
  }, 0)
}

const addTotalDrawerCount = (usersData) => {
  return usersData.reduce((final, user) => {
    return final + user.totalDrawerCount
  }, 0)
}

const addTotalHangingHeight = (usersData) => {
  return usersData.reduce((final, user) => {
    return final + user.totalHangingHeight
  }, 0)
}

export const calculateTotals = (usersData) => {
  const totalShelfWidth = addTotalShelfWidth(usersData)
  const totalDrawerCount = addTotalDrawerCount(usersData)
  const totalHangingHeight = addTotalHangingHeight(usersData)

  return {
    totalShelfWidth,
    totalDrawerCount,
    totalHangingHeight
  }
}