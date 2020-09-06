const MULTIPLES_OF_FIVE_TO_WORD = "TI"
const MULTIPLES_OF_THREE_TO_WORD = "Music"
const MULTIPLES_OF_BOTH_TO_WORD = "Musical"

const multipleOfFive = number => number % 5 === 0 && MULTIPLES_OF_FIVE_TO_WORD
const multipleOfThree = number => number % 3 === 0 && MULTIPLES_OF_THREE_TO_WORD
const both = number => multipleOfFive(number) && multipleOfThree(number) && MULTIPLES_OF_BOTH_TO_WORD
const output = number => both(number) || multipleOfThree(number) || multipleOfFive(number) || number
const printValuesFrom1to100 = () => [...Array(100).keys()].map(number => console.log(output(number + 1)))

module.exports = {
    MULTIPLES_OF_THREE_TO_WORD,
    MULTIPLES_OF_FIVE_TO_WORD,
    MULTIPLES_OF_BOTH_TO_WORD,
    printValuesFrom1to100,
    multipleOfFive,
    multipleOfThree,
    both,
    output
}