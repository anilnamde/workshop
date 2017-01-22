import {winCombinations, Logic} from './Logic';

describe('Logic test ', ()=>{

    it('should have logic class', () => {
        expect(Logic).toBeDefined();
        expect(winCombinations.length).toEqual(8);
    });

    it('should have win possibilities of number', () => {
        const logic = new Logic();
        expect(logic.winPossibilities).toEqual([448, 56, 7, 292, 146, 73, 273, 84]);
    });

    it('should return number array from array of array', () => {
        const logic = new Logic();
        expect(logic.convertArrayOfBinaryArrayToNumber(winCombinations)).toEqual([448, 56, 7, 292, 146, 73, 273, 84]);
    });

    it('should return number from array', ()=>{
        const logic = new Logic();
        const array = [1,0,0,0,0,0,0,0,0];
        expect(logic.convertBinaryArrayToNumber(array)).toEqual(256);
    });

    it('should tell if win is done', ()=>{
       const logic = new Logic();
        expect(logic.hasWin(7)).toBeTruthy();
        expect(logic.hasWin(17)).toBeFalsy();
    });
});
