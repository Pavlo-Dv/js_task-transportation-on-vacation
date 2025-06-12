/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longRent = 7;
  const shortRent = 3;
  const basePrice = days * 40;
  const basicDisc = basePrice - 20;
  const additionalDisc = basePrice - 50;

  if (days >= longRent) {
    return additionalDisc;
  }

  if (days >= shortRent) {
    return basicDisc;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
