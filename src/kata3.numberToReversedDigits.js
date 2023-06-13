const numberToReversedDigits = (number) => {
  const numToSplitString = number.toString().split("");
  return numToSplitString.map(Number).reverse();
};

module.exports = numberToReversedDigits;
