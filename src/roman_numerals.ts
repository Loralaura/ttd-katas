export function convertToNumerals(int: number) {
  return true;
}

export function convertToInt(numerals: string) {
  return true;
}

/* Ideas?
-
- Break down number into thousands, hundreds, tens, and single digits
- For each, do a case select one through 9, substituting in I for C for X etc...
- ???
- Great success
-
- Converting back
- ... The same in reverse, I suppose
- Split using I, C, X etc
- Case select 1-9 (in this case, i - ix)
- Accumulate total in a variable
*/
