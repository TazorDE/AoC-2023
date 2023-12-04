import path from "path";
import { readFileLineByLine } from "../readFileLineByLine";

/// Advent of Code Day 4 - https://adventofcode.com/2023/day/4
const test = true;
const input = test ? path.resolve('./day4/demoInput.txt') : path.resolve('./day4/input.txt');

/**
 * Calculates the points based on the number of matches.
 * 
 * @param numberOfMatches The number of matches.
 * @returns The calculated points.
 */
const calculatePoints = (numberOfMatches: number) => {
    if (numberOfMatches == 0) return 0;
    let points = 1;
    for (let i = 1; i < numberOfMatches; i++) {
        points *= 2;
    }
    return points;
}

const day4 = () => {
    // get file lines
    const fileLines = readFileLineByLine(input);

    let totalPoints = 0;
    let numberOfDuplicates: number[] = [];

    // loop through each line
    fileLines.forEach((line, index) => {
        // remove the first section
        const lineParts = line.split(':');
        const relevantPart = lineParts[1].trim();
        // split the relevant part by the pipe
        const relevantPartParts = relevantPart.split('|');
        let winningNumbers = relevantPartParts[0].trim().split(' ');
        let lotteryNumbers = relevantPartParts[1].trim().split(' ');

        // filter out the empty strings
        winningNumbers = winningNumbers.filter(winningNumber => winningNumber != '');
        lotteryNumbers = lotteryNumbers.filter(lotteryNumber => lotteryNumber != '');

        // part 1
        // find all the lottery numbers that match the winning numbers
        let numberOfMatches = 0;
        lotteryNumbers.forEach(lotteryNumber => {
            if (winningNumbers.includes(lotteryNumber)) {
                numberOfMatches++;
            }
        });

        // calculate the points
        const points = calculatePoints(numberOfMatches);
        totalPoints += points;

    });

    console.log(`Total points: ${totalPoints}`);
};

day4();

