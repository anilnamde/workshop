// to contain the logic for gam win

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
        return parseInt(binaryArray && binaryArray.length> 0 ? binaryArray.join('') : '', 2);
    }

    // !! not using this .. :) Yuaakkk
    convertBoardToNumber(values, currentPlayer) {
        var binaryArray = values.map((value)=>{
            return value === currentPlayer ? 1 : 0;
        });
        return binaryArray;
    }

    hasWin(value){
        console.log('hasWin', this.winPossibilities, value)
        return this.winPossibilities.indexOf(value) > 0;
    }
}

export {winCombinations, Logic};