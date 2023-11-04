function convertDigit(
  num: number,
  ones_sign: string,
  fives_sign: string,
  tens_sign: string
) {
  switch (num) {
    case 0:
      return "";
    case 1:
      return ones_sign;
    case 2:
      return ones_sign.repeat(2);
    case 3:
      return ones_sign.repeat(3);
    case 4:
      return ones_sign + fives_sign;
    case 5:
      return fives_sign;
    case 6:
      return fives_sign + ones_sign;
    case 7:
      return fives_sign + ones_sign.repeat(2);
    case 8:
      return fives_sign + ones_sign.repeat(3);
    case 9:
      return ones_sign + tens_sign;
  }
}

//converts each digit into a numeral one by one
export function convertToNumerals(int: number) {
  let thousands = "M".repeat(Math.floor(int / 1000) % 10);
  let hundreds = convertDigit(Math.floor(int / 100) % 10, "C", "D", "M");
  let tens = convertDigit(Math.floor(int / 10) % 10, "X", "L", "C");
  let ones = convertDigit(int % 10, "I", "V", "X");

  return thousands + hundreds + tens + ones;
}

export function convertToInt(numerals: string) {
  let numeralCheck = numerals;
  let thousands = 0;

  for (let i = 0; i < 3 && numeralCheck[i]; i++) {
    if (numeralCheck[i] === "M") {
      numeralCheck.replace(numeralCheck[i], " ");
      thousands++;
    } else {
      break;
    }
  }

  const ones = convertNumeral(numeralCheck, "I", "V", "X");
  const tens = convertNumeral(numeralCheck, "X", "L", "C");
  const hundreds = convertNumeral(numeralCheck, "C", "D", "M");

  function convertNumeral(
    numerals: string,
    ones_sign: string,
    fives_sign: string,
    tens_sign: string
  ) {
    if (numerals.includes(ones_sign + tens_sign)) {
      numeralCheck = numeralCheck.substring(0, numeralCheck.length - 2);
      return "9";
    } else if (numerals.includes(fives_sign + ones_sign.repeat(3))) {
      numeralCheck = numeralCheck.substring(0, numeralCheck.length - 4);
      return "8";
    } else if (numerals.includes(fives_sign + ones_sign.repeat(2))) {
      numeralCheck = numeralCheck.substring(0, numeralCheck.length - 3);
      return "7";
    } else if (numerals.includes(fives_sign + ones_sign)) {
      numeralCheck = numeralCheck.substring(0, numeralCheck.length - 2);
      return "6";
    } else if (numerals.includes(ones_sign + fives_sign)) {
      numeralCheck = numeralCheck.substring(0, numeralCheck.length - 2);
      return "4";
    } else if (numerals.includes(fives_sign)) {
      numeralCheck = numeralCheck.substring(0, numeralCheck.length - 1);
      return "5";
    } else if (numerals.includes(ones_sign.repeat(3))) {
      numeralCheck = numeralCheck.substring(0, numeralCheck.length - 3);
      return "3";
    } else if (numerals.includes(ones_sign.repeat(2))) {
      numeralCheck = numeralCheck.substring(0, numeralCheck.length - 2);
      return "2";
    } else if (numerals.includes(ones_sign)) {
      numeralCheck = numeralCheck.substring(0, numeralCheck.length - 1);
      return "1";
    } else {
      return "0";
    }
  }

  return Number(`${thousands + hundreds + tens + ones}`);
}
