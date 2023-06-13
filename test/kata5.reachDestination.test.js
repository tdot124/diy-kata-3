const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.");
    expect(reachDestination(41, 10)).toEqual("I should be there in 4.5 hours.");
    expect(reachDestination(66, 6)).toEqual("I should be there in 11 hours.");
    expect(reachDestination(22, 7)).toEqual("I should be there in 3.5 hours.");
    expect(reachDestination(1, 20)).toEqual("I should be there in 0.5 hours.");
  });
});
