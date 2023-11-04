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
  return true;
}

/* Ideas?
-
- Break down number into thousands, hundreds, tens, and single digits
- For each, do a case select one through 9, substituting in I for C for X etc...
- ???
- Great success!
-
- Converting back
- ... The same in reverse, I suppose
- Split using I, C, X etc
- Case select 1-9 (in this case, i - ix)
- Accumulate total in a variable
*/
