const {
    MULTIPLES_OF_THREE_TO_WORD,
    MULTIPLES_OF_FIVE_TO_WORD,
    MULTIPLES_OF_BOTH_TO_WORD,
    multipleOfFive,
    multipleOfThree,
    both,
    output 
} = require('../scripts/numbers')

const numberMultipleOfThree = Math.trunc(Math.random() * 10) * 3
const notMultipleOfThree = Math.trunc(Math.random() * 10) * 3 + 1 
test(`test multiples of three with ${numberMultipleOfThree} and ${notMultipleOfThree}`, () => {
    expect(multipleOfThree(numberMultipleOfThree)).toBe(MULTIPLES_OF_THREE_TO_WORD);
    expect(multipleOfThree(numberMultipleOfThree)).not.toBe(true)
    expect(multipleOfThree(notMultipleOfThree)).toBe(false);
    expect(multipleOfThree(notMultipleOfThree)).not.toBe(MULTIPLES_OF_THREE_TO_WORD)
});

const numberMultipleOfFive = Math.trunc(Math.random() * 10) * 5
const notMultipleOfFive = Math.trunc(Math.random() * 10) * 5 + 1
test(`test multiples of five with ${numberMultipleOfFive} and ${notMultipleOfFive}`, () => {
    expect(multipleOfFive(numberMultipleOfFive)).toBe(MULTIPLES_OF_FIVE_TO_WORD);
    expect(multipleOfFive(numberMultipleOfFive)).not.toBe(true)
    expect(multipleOfFive(notMultipleOfFive)).toBe(false);
    expect(multipleOfFive(notMultipleOfFive)).not.toBe(MULTIPLES_OF_FIVE_TO_WORD)
});

const multipleOfBoth = Math.trunc(Math.random() * 10) * 3 * 5
const notMultipleOfBoth = Math.trunc(Math.random() * 10) * 3 * 5 + 1 
test(`test multiples of both with ${multipleOfBoth} and ${notMultipleOfBoth}`, () => {
    expect(both(multipleOfBoth)).toBe(MULTIPLES_OF_BOTH_TO_WORD);
    expect(both(multipleOfBoth)).not.toBe(true)
    expect(both(notMultipleOfBoth)).toBe(false);
    expect(both(notMultipleOfBoth)).not.toBe(MULTIPLES_OF_THREE_TO_WORD)
});

test(`testing output`, () => {
    expect(output(numberMultipleOfThree)).not.toBe(expect.any(Number));
    expect(output(notMultipleOfThree)).not.toBe(MULTIPLES_OF_THREE_TO_WORD);
    expect(output(numberMultipleOfFive)).not.toBe(expect.any(Number));
    expect(output(notMultipleOfFive)).not.toBe(MULTIPLES_OF_FIVE_TO_WORD);
    expect(output(multipleOfBoth)).toBe(MULTIPLES_OF_BOTH_TO_WORD);
    expect(output(notMultipleOfBoth)).not.toBe(MULTIPLES_OF_BOTH_TO_WORD);
});