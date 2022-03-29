const numberChecker = require("./script-1");
const { expect, describe, it } = require("@jest/globals");

describe("numberChecker", () => {
  describe("when number are positive", () => {
    it("return a positive number", () => {
      expect(numberChecker(5)).toBe("Bilangan positif");
    });
  });
  describe("when number are negative", () => {
    it("return a negative number", () => {
      expect(numberChecker(-5)).toBe("Bilangan negatif");
    });
  });
  describe("when number are zero", () => {
    it("return a netral number", () => {
      expect(numberChecker(0)).toBe("Bilangan nol");
    });
  });
});
