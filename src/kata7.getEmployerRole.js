const getEmployerRole = (employeeName, employees) => {
  const result = employees.find((person) => person.name === employeeName);
  return result.role;
};

module.exports = getEmployerRole;
