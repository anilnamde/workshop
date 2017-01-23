import {Logic} from './Logic';

describe('Logic test ', ()=> {

    it('should have logic class', () => {
        expect(Logic).toBeDefined();
    });

    it('should have win values of number', () => {
        const logic = new Logic();
        expect(logic.winValues).toEqual([448, 56, 7, 292, 146, 73, 273, 84]);
    });

    it('should return number from array', ()=> {
        const logic = new Logic();
        const array = [1, 0, 0, 0, 0, 0, 0, 0, 0];
        expect(logic.convertBinaryArrayToNumber(array)).toEqual(256);
    });

    it('should convert board for a player to a binary value', ()=>{
        const logic = new Logic();
        expect(logic.convertBoardToBinaryArray(['X', '-', '-'], 'X')).toEqual([1, 0, 0])

    });

    it('should tell if win is done', ()=> {
        const logic = new Logic();
        expect(logic.hasWin(['X', '-', '-', 'X', '-', '-', 'X', '-', '-'], '0')).toBeTruthy();
        expect(logic.hasWin(['X', '-', '-', '-', '-', '-', 'X', '-', '-'], '0')).toBeFalsy();
    });

    it('should detect scenario of draw when no winner all blocks are clicked', ()=> {
        const logic = new Logic();
        expect(logic.hasDraw(['X', 'O', 'X', 'X', 'O', 'X','X', 'O', 'X'])).toBeTruthy();
        expect(logic.hasDraw(['X', '-'])).toBeFalsy();
    });
});
