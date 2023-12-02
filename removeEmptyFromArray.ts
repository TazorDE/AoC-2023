/// This function removes empty strings from an array
export const removeEmtpyStringsFromArray = (array: string[]) => {
    // remove empty strings from array
    const filteredArray = array.filter((item) => item !== '');
    // return filtered array
    return filteredArray;
};