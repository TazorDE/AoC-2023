import path from "path";
import { readFileLineByLine } from "../readFileLineByLine";

/// Advent of Code Day 2 - https://adventofcode.com/2023/day/2
const test = false;
const input = test ? path.resolve('./day2/demoInput.txt') : path.resolve('./day2/input.txt');

type Game = {
    red: number,
    green: number,
    blue: number
}

const day1Part1 = () => {
    const maxAllowedValues: { [key: string]: number } = {
        red: 12,
        green: 13,
        blue: 14
    };

    // get file lines
    const fileLines = readFileLineByLine(input);

    const games: Game[] = [];
    const gamePowers: number[] = [];

    fileLines.forEach((line) => {
        const parts = line.split(":");
        // part 0 can be safely ignored since the ids go up sequentially from 1 to 100
        // part 1 contains the "game" results separated by semicolons
        const gameResults = parts[1].split(";");

        const colors: { [key: string]: number[] } = {
            "blue": [],
            "red": [],
            "green": [],
        };

        gameResults.forEach((result) => {
            const colorCountPairs = result.trim().split(",");

            colorCountPairs.forEach((pair) => {
                const [count, color] = pair.trim().split(" ");
                colors[color].push(parseInt(count));
            });
        });

        // add the maximum of each color to the games array
        games.push({
            red: Math.max(...colors.red),
            green: Math.max(...colors.green),
            blue: Math.max(...colors.blue)
        });
        gamePowers.push(Math.max(...colors.red) * Math.max(...colors.green) * Math.max(...colors.blue));
    });

    // add the indexes of the games that are valid to an array
    const validGames: number[] = [];
    games.forEach((game, index) => {
        if (game.red <= maxAllowedValues.red && game.green <= maxAllowedValues.green && game.blue <= maxAllowedValues.blue) {
            validGames.push(index + 1);
        }
    });

    // sum the indexes of the valid games
    const sum = validGames.reduce((a, b) => a + b, 0);
    const sum2 = gamePowers.reduce((a, b) => a + b, 0);

    console.log(`Part 1: ${sum}`);
    console.log(`Part 2: ${sum2}`);
};

day1Part1();

