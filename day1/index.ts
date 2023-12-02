import path from "path";
import { readFileLineByLine } from "../readFileLineByLine";

/// Advent of Code Day 1 - https://adventofcode.com/2023/day/1
const test = false;
const input = test ? path.resolve('./day1/demoInput.txt') : path.resolve('./day1/input.txt');
console.log(input);

/// This function returns all digits found in a string in an array
export const getDigitsFromString = (string: string) => {
    // get all digits from string and return as an array
    return string.match(/\d/g);
};

const day1Part1 = () => {
    // get file lines
    const fileLines = readFileLineByLine(input);

    // for each line get digits
    const digits = fileLines.map(line => getDigitsFromString(line));

    const numbers: number[] = [];

    // combine first and last digit of each array into a number
    digits.forEach(digitEntry => {
        if (!digitEntry) return;
        // first element of array
        const firstDigit = digitEntry[0];
        // last element of array
        const lastDigit = digitEntry[digitEntry.length - 1];

        // combine first and last digit into a number
        const number = parseInt(`${firstDigit}${lastDigit}`);

        // write number to numbers array
        numbers.push(number);
    });

    // sum all numbers in array and return
    const sum = numbers.reduce((a, b) => a + b, 0);

    console.log("Result", sum);
};

day1Part1();