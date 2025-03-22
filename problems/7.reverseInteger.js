var reverse = function(x) {
    const string = x.toString();
    const isNegative = string[0] === '-';
    let reverseString = '';
    const endIndex = isNegative ? 1 : 0
    for (let i = string.length - 1; i >= endIndex; i--) {
        reverseString += string[i];
    }
    const result = isNegative ? -parseInt(reverseString) : parseInt(reverseString);
    const min = Math.pow(-2, 31)
    const max = Math.pow(2, 31) - 1
    if (result < min || result > max) return 0;
    return result;
};
