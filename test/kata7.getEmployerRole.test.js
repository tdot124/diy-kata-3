const { getEmployerRole } = require("../src");

const employees = [
  {
    name: "Satti",
    role: "Developer",
  },
  {
    name: "Jenny",
    role: "Sales Associate",
  },
  {
    name: "Javid",
    role: "Human Recommended Reading Assistant",
  },
];

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole("Javid", employees)).toEqual(
      "Human Recommended Reading Assistant"
    );
    expect(getEmployerRole("Jenny", employees)).toEqual("Sales Associate");
    expect(getEmployerRole("Satti", employees)).toEqual("Developer");
  });
});
