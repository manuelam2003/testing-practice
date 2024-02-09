import caesarCipher from "./caesarCipher";

describe("Caesar Cipher", () => {
  test("works with shift lower than 26 and lower case", () => {
    expect(caesarCipher("abcde", 2)).toBe("cdefg");
  });
  test("works with shift lower than 26 and upper case", () => {
    expect(caesarCipher("ABCDE", 2)).toBe("CDEFG");
  });
  test("works with shift higher than 26 and lower case", () => {
    expect(caesarCipher("abcde", 28)).toBe("cdefg");
  });
  test("works with shift higher than 26 and upper case", () => {
    expect(caesarCipher("ABCDE", 28)).toBe("CDEFG");
  });
  test("works with punctuation", () => {
    expect(caesarCipher("Me llamo !Pepe¿ Rodriguez.", 5)).toBe(
      "Rj qqfrt !Ujuj¿ Wtiwnlzje."
    );
  });
});
