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
  test("Convert an integer from 1-10 into roman numerals", () => {
    expect(convertToInt("I")).toBe(1);
    expect(convertToInt("IV`")).toBe(4);
    expect(convertToInt("V")).toBe(5);
    expect(convertToInt("VI")).toBe(6);
    expect(convertToInt("IX")).toBe(9);
    expect(convertToInt("X")).toBe(10);
  });

  test("Convert an integer between 10-99 into roman numerals", () => {
    expect(convertToInt("XI")).toBe(11);
    expect(convertToInt("XIV")).toBe(14);
    expect(convertToInt("XV")).toBe(15);
    expect(convertToInt("XXX")).toBe(30);
    expect(convertToInt("XLI")).toBe(41);
    expect(convertToInt("LXIV")).toBe(64);
    expect(convertToInt("LXXV")).toBe(75);
    expect(convertToInt("LXXXVI")).toBe(86);
    expect(convertToInt("XCIX")).toBe(99);
  });

  test("Convert an integer between 100-999 into roman numerals", () => {
    expect(convertToInt("CXI")).toBe(111);
    expect(convertToInt("CCXIV")).toBe(214);
    expect(convertToInt("CCCXV")).toBe(315);
    expect(convertToInt("CDXXX")).toBe(430);
    expect(convertToInt("DXLI")).toBe(541);
    expect(convertToInt("DCLXIV")).toBe(664);
    expect(convertToInt("DCCLXXV")).toBe(775);
    expect(convertToInt("DCCCLXXXVI")).toBe(886);
    expect(convertToInt("CMXCIX")).toBe(999);
  });

  test("Convert an integer between 1000-3000 into roman numerals", () => {
    expect(convertToInt("M")).toBe(1000);
    expect(convertToInt("MCCCLVI")).toBe(1356);
    expect(convertToInt("MMCCXXII")).toBe(2222);
    expect(convertToInt("MMDXLV")).toBe(2545);
    expect(convertToInt("MMCMXCIX")).toBe(2999);
    expect(convertToInt("MMM")).toBe(3000);
  });
});
