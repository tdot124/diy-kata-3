const humanCatDogYears = (number) => {
  let dogYears = 0;
  let catYears = 0;

  if (number === 1) {
    dogYears = 15;
    catYears = 15;
  }

  if (number === 2) {
    dogYears = 24;
    catYears = 24;
  }

  if (number > 2) {
    dogYears = (number - 2) * 5 + 24;
    catYears = (number - 2) * 4 + 24;
  }

  return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
