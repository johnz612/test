import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./functionsToTest";

test(" takes a string and returns it with the first character capitalized", () => {
  expect(capitalize("john")).toBe("John");
});

test("takes a string and returns it reversed", () => {
  expect(reverseString("john rey")).toBe("yer nhoj");
});

test("add two numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("subtract two numbers", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});
test("divide two numbers", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
test("multiply two numbers", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("cipher, returns basic cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("cipher, returns basic cipher and case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("cipher returns cipher with special characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Analyze Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
