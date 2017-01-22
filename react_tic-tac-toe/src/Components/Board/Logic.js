// to contain the logic for gam win
import {CONSANTS} from './Constants';

const winCombinations = [
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],

    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],

    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0]
];


class Logic {
    constructor() {
        this.winPossibilities = this.convertArrayOfBinaryArrayToNumber(winCombinations);
    }

    convertArrayOfBinaryArrayToNumber(arrayOfBinaryArray) {
        return arrayOfBinaryArray.map((winCombination)=> {
            return this.convertBinaryArrayToNumber(winCombination);
        });
    }

    convertBinaryArrayToNumber(binaryArray) {
        return parseInt(binaryArray && binaryArray.length > 0 ? binaryArray.join('') : '', 2);
    }

    // !! not using this .. :) Yuaakkk
    convertBoardToNumber(values, currentPlayer) {
        var binaryArray = values.map((value)=> {
            return value === currentPlayer ? 1 : 0;
        });
        return binaryArray;
    }

    hasWin(values, index) {
        const currentPlayer = values[index];
        let numberIs = this.convertBoardToNumber(values, currentPlayer);
        numberIs = this.convertBinaryArrayToNumber(numberIs);
        return this.winPossibilities.indexOf(numberIs) > 0;
    }

    hasDraw(values) {
        return values.some((value) => {
            return value === CONSANTS.UNSET;
        });
    }
}

export {winCombinations, Logic};