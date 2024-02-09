import capitalize from "./capitalize";

describe("capitalize", () => {
  test(" return first latter of string capitalized", () => {
    expect(capitalize("aa")).toBe("Aa");
  });
  test(" return first latter of string capitalized", () => {
    expect(capitalize("the boy")).toBe("The boy");
  });
});
