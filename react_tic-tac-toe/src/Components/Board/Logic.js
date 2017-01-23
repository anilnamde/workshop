// to contain the logic for gam win
import {CONSTANTS} from './Constants';

// const winCombinations = [
//     [
//         1, 1, 1,
//         0, 0, 0,
//         0, 0, 0
//     ],
//     [
//         0, 0, 0,
//         1, 1, 1,
//         0, 0, 0
//     ],
//     [
//         0, 0, 0,
//         0, 0, 0,
//         1, 1, 1
//     ],
//
//     [
//         1, 0, 0,
//         1, 0, 0,
//         1, 0, 0],
//     [
//         0, 1, 0,
//         0, 1, 0,
//         0, 1, 0
//     ],
//     [
//         0, 0, 1,
//         0, 0, 1,
//         0, 0, 1
//     ],
//
//     [
//         1, 0, 0,
//         0, 1, 0,
//         0, 0, 1
//     ],
//
//     [
//         0, 0, 1,
//         0, 1, 0,
//         1, 0, 0
//     ]
// ];




class Logic {
    constructor() {
        this.winValues = [448, 56, 7, 292, 146, 73, 273, 84];
    }


    // not needed this function now
    // convertArrayOfBinaryArrayToNumber(arrayOfBinaryArray) {
    //     return arrayOfBinaryArray.map((winCombination)=> {
    //         return this.convertBinaryArrayToNumber(winCombination);
    //     });
    // }

    convertBinaryArrayToNumber(binaryArray) {
        return parseInt(binaryArray && binaryArray.length > 0 ? binaryArray.join('') : '', 2);
    }

    // !! not using this .. :) Yuaakkk
    convertBoardToBinaryArray(values, currentPlayer) {
        var binaryArray = values.map((value)=> {
            return value === currentPlayer ? 1 : 0;
        });
        return binaryArray;
    }

    hasWin(values, index) {
        const currentPlayer = values[index];
        let numberIs = this.convertBoardToBinaryArray(values, currentPlayer);
        numberIs = this.convertBinaryArrayToNumber(numberIs);

        return this.winValues.some((winValue)=>{
            return this.winValues.indexOf(winValue & numberIs) >= 0;
        });
    }

    hasDraw(values) {
        return !values.some((value) => {
            return value === CONSTANTS.UNSET;
        });
    }
}

export {Logic};