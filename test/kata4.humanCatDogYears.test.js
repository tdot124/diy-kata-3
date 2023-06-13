const { humanCatDogYears } = require("../src");

describe("returns an array of human, cat and dog years when given a human age", () => {
  it("returns correct calculation of catdog years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    expect(humanCatDogYears(7)).toEqual([7, 44, 49]);
  });
});
