import { existsSync, readFileSync } from 'fs';

/// This function reads a file line by line and returns an array of strings
export const readFileLineByLine = async (filePath: string) => {
    // check if given file exists
    if (!existsSync(filePath)) {
        throw new Error('File does not exist');
    }
    // read file line by line
    const fileLines = readFileSync(filePath, 'utf-8').split('\n');
    // return file lines
    return fileLines;
};