const fizzBuzz = (n) => {
  let output = "";
  if (n % 3 === 0) {
    output += "Fizz";
  }
  if (n % 5 === 0) {
    output += "Buzz";
  }

  if (output === "") {
    output = n;
  }

  return output;
};

module.exports = fizzBuzz;
