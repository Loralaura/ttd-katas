import { convertToNumerals, convertToInt } from "../roman_numerals";

describe("convertToNumerals", () => {
  test("Convert an integer from 1-10 into roman numerals", () => {
    expect(convertToNumerals(1)).toBe("I");
    expect(convertToNumerals(4)).toBe("IV");
    expect(convertToNumerals(5)).toBe("V");
    expect(convertToNumerals(6)).toBe("VI");
    expect(convertToNumerals(9)).toBe("IX");
    expect(convertToNumerals(10)).toBe("X");
  });

  test("Convert an integer between 10-99 into roman numerals", () => {
    expect(convertToNumerals(11)).toBe("XI");
    expect(convertToNumerals(14)).toBe("XIV");
    expect(convertToNumerals(15)).toBe("XV");
    expect(convertToNumerals(30)).toBe("XXX");
    expect(convertToNumerals(41)).toBe("XLI");
    expect(convertToNumerals(64)).toBe("LXIV");
    expect(convertToNumerals(75)).toBe("LXXV");
    expect(convertToNumerals(86)).toBe("LXXXVI");
    expect(convertToNumerals(99)).toBe("XCIX");
  });
});

describe("convertToInt", () => {
  test("test1", () => {
    expect(convertToInt("IV")).toBe(true);
    expect(convertToInt("IV")).toBe(true);
  });

  test("test2", () => {
    expect(convertToInt("IV")).toBe(true);
  });
});
