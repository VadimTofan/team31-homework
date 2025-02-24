console.log("===========Highest and Lowest===========");

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  for (let i = 0; i < numbers.length; i++) {
    numbers.sort((a, b) => b - a);
  }
  console.log(
    `The highest is ${numbers[0]} and the lowest is ${
      numbers[numbers.length - 1]
    }`
  );
  return `${numbers[0]} ${numbers[numbers.length - 1]}`;
}

highAndLow("1 2 3 4 5");
highAndLow("1 2 -3 4 5");
highAndLow("1 9 3 4 -5");
