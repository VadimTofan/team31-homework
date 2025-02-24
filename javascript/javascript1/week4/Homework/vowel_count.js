console.log("===========Vowel Count===========");

function getCount(str) {
  let a = "a",
    e = "e",
    i = "i",
    o = "o",
    u = "u";
  let count = 0;

  for (let j = 0; j < str.length; j++) {
    if (
      str[j] === a ||
      str[j] === e ||
      str[j] === i ||
      str[j] === o ||
      str[j] === u
    ) {
      count++;
    }
  }

  return `The amount of vowels is ${count};`;
}

console.log(getCount("abracadabra"));
