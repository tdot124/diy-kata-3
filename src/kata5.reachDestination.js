const reachDestination = (distance, speed) => {
  const hours = Math.ceil((distance / speed) * 2) / 2;
  return `I should be there in ${hours} hours.`;
};

module.exports = reachDestination;
