/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {

  const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  const romanSub = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  };

  let num = 0, i;

  for (i = 0; i < s.length - 1; i++) {
    if (romanSub[s[i] + s[i + 1]] !== undefined) {
      num += romanSub[s[i] + s[i + 1]];
      i++;
    } else {
      num += roman[s[i]];
    }
  }

  if (i < s.length) {
    num += roman[s[i]];
  }

  return num;

};

module.exports = romanToInt;