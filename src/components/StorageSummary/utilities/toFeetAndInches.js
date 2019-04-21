export const toFeetAndInches = (total) => {
  const inches = Math.round(total / 25.4)
  const feet = Math.floor(inches / 12)
  const remainingInches = inches % 12
  return `${feet}' ${remainingInches}"`
}