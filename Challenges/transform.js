function transformString(input) {
  const length = input.length;
  let result = input;

  if (length % 3 === 0 && length % 5 === 0) {
    // Divisible by both 3 and 5
    result = result.split("").reverse().join("");
    const result1 = result;

    result = result
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
    const result2 = result;

    return result1 + " " + result2;
  } else if (length % 3 === 0) {
    // Divisible by 3
    result = result.split("").reverse().join("");
    return result;
  } else if (length % 5 === 0) {
    // Divisible by 5
    result = result
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
    return result;
  }
  return "not divisible by 3 nor 5";
}

console.log(transformString("Hello world"));
