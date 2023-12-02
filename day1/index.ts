import path from "path";
import { readFileLineByLine } from "../readFileLineByLine";

/// Advent of Code Day 1 - https://adventofcode.com/2023/day/1
const test = false;
const input = test ? path.resolve('./day1/demoInput.txt') : path.resolve('./day1/input.txt');
console.log(input);

/// This function returns all digits found in a string in an array
export const getDigitsFromString = (string: string) => {
    // get all digits from string and return as an array
    const matches = string.match(/\d/g);
    return matches;
};

/**
 * Converts an array of digit entries into an array of numbers.
 * Each digit entry is an array of digits represented as RegExpMatchArray.
 * The first and last digit of each entry are combined into a number.
 * Returns an array of numbers.
 *
 * @param digits - An array of digit entries (strings).
 * @returns An array of numbers.
 */
function digitsToNumber(digits: (RegExpMatchArray | null)[]): number[] {
    const numbers: number[] = [];
    digits.forEach(digitEntry => {
        if (!digitEntry) return;
        // first element of array
        const firstDigit = digitEntry[0];
        // last element of array
        const lastDigit = digitEntry[digitEntry.length - 1];

        // combine first and last digit into a number
        const number = Number(`${firstDigit}${lastDigit}`);

        // write number to numbers array
        numbers.push(number);
    });
    return numbers;
}

const day1Part1 = () => {
    // get file lines
    const fileLines = readFileLineByLine(input);

    // for each line get digits
    const digits = fileLines.map(line => getDigitsFromString(line));

    // combine first and last digit of each array into a number
    const numbers = digitsToNumber(digits);

    // sum all numbers in array and return
    const sum = numbers.reduce((a, b) => a + b, 0);

    console.log("Result of Part 1:", sum);
};

day1Part1();

const digitWords = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
];

const day1Part2 = () => {

    const regex = new RegExp(`(?=(?<digit>[0-9]|${digitWords.join('|')}))`, 'g');

    // get file lines
    const fileLines = readFileLineByLine(input);

    const numbers = fileLines.map(line => {
        const first = [...line.matchAll(regex)].at(0)!.groups!.digit;
        const last = [...line.matchAll(regex)].at(-1)!.groups!.digit;

        const a = Number.isNaN(+first) ? digitWords.indexOf(first) : +first;
        const b = Number.isNaN(+last) ? digitWords.indexOf(last) : +last;
        return a * 10 + b;
    });

    // sum all numbers in array and return
    console.log(numbers.reduce((a, b) => a + b, 0));
}

day1Part2();