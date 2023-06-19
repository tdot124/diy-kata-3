const joinNames = (namesObj) => {
  if (namesObj.length > 2) {
    const start = namesObj.shift().name;
    const end = ` & ${namesObj.pop().name}`;
    const middle = namesObj
      .map((obj) => `, ${obj.name}`)
      .reduce((acc, person) => acc + person);
    return `${start + middle + end}`;
  }
  if (namesObj.length === 2) {
    return `${namesObj.shift().name} & ${namesObj.pop().name}`;
  }
  return `${namesObj.shift().name}`;
};

module.exports = joinNames;
