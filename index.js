const logFirstAndRest = (a, ...rest) => console.log(a, rest);
logFirstAndRest(1, 2, 3, 4, 5);

const logFirstAndSecond = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  console.log(rest);
};
logFirstAndSecond(12, 22, 33, 44, 55);

const calculateProduct = (...nums) => {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  return product;
};

console.log(calculateProduct(2, 3, 4));
console.log(calculateProduct(5, 2, 1, 3));

const concatenateStrings = (...string) => console.log(string.join(" "));
concatenateStrings("JavaScript", "is", "fun");

const findSum = (message, ...nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(`${message}${sum}`);
};

findSum("Sum of Numbers: ", 2, 4, 6, 8, 10);

const containsValue = (valueToFind, ...array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valueToFind) {
      return true;
    }
  }
  return false;
};

console.log(containsValue(3, 1, 2, 3, 4));
console.log(containsValue("apple", "banana", "orange"));

const calculateAverage = (...nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return nums.length === 0 ? 0 : sum / nums.length;
};

console.log(calculateAverage(10, 5, 15));
console.log(calculateAverage(2, 4, 6, 8));
