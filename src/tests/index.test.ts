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

  test("Convert an integer between 100-999 into roman numerals", () => {
    expect(convertToNumerals(111)).toBe("CXI");
    expect(convertToNumerals(214)).toBe("CCXIV");
    expect(convertToNumerals(315)).toBe("CCCXV");
    expect(convertToNumerals(430)).toBe("CDXXX");
    expect(convertToNumerals(541)).toBe("DXLI");
    expect(convertToNumerals(664)).toBe("DCLXIV");
    expect(convertToNumerals(775)).toBe("DCCLXXV");
    expect(convertToNumerals(886)).toBe("DCCCLXXXVI");
    expect(convertToNumerals(999)).toBe("CMXCIX");
  });

  test("Convert an integer between 1000-3000 into roman numerals", () => {
    expect(convertToNumerals(1000)).toBe("M");
    expect(convertToNumerals(1356)).toBe("MCCCLVI");
    expect(convertToNumerals(2222)).toBe("MMCCXXII");
    expect(convertToNumerals(2545)).toBe("MMDXLV");
    expect(convertToNumerals(2999)).toBe("MMCMXCIX");
    expect(convertToNumerals(3000)).toBe("MMM");
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
