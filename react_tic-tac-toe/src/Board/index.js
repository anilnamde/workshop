import React, {Component} from 'react';
import Square from './../Square/index';
import './style.css';

const CONSTANTS = {
    CROSS: 'X',
    CIRLCLE: 'O',
    UNSET: '-'
};

class Logic {
    constructor() {
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

        this.winPossibilities = Logic.convertArrayOfBinaryArrayToNumber(winCombinations);
    }

    static convertArrayOfBinaryArrayToNumber(arrayOfbinaryArray) {
        return arrayOfbinaryArray.map((winCombination)=> {
            return Logic.convertBinaryArrayToNumber(winCombination);
        });
    }

    static convertBoardToBinaryArray(values, player) {
        return values.map((value)=> {
            return value === player ? 1 : 0;
        });
    }

    static convertBinaryArrayToNumber(binaryArray) {
        return parseInt(binaryArray.join(''), 2);
    }

    isWin(array, player) {
        const binaryArray = Logic.convertBoardToBinaryArray(array, player);
        const number = Logic.convertBinaryArrayToNumber(binaryArray);
        if (this.winPossibilities.indexOf(number) > 0)
            return player;
        return CONSTANTS.UNSET;
    }
}

export default class Board extends Component {
    constructor() {
        super();
        this.state = this.getInitialState();
        this.logic = new Logic();
    }

    getInitialState() {
        return {
            values: Array(9).fill().map((e, index)=> CONSTANTS.UNSET),
            xIsNext: true,
            winner: CONSTANTS.UNSET
        };
    }

    isSquareSelected(index) {
        return this.state.values[index] !== CONSTANTS.UNSET;
    }

    showCurrentPlayer() {
        return this.state.xIsNext ? CONSTANTS.CROSS : CONSTANTS.CIRLCLE
    }

    handlerSquareClicked(index) {
        if (!this.isSquareSelected(index)) {
            const values = this.state.values.slice();
            values[index] = this.showCurrentPlayer();
            const currentPlayer = this.showCurrentPlayer();

            this.setState((prevState, prop) => {
                this.calculateWin(values, currentPlayer)
                return {
                    xIsNext: !this.state.xIsNext,
                    values
                };
            });


        }
    }

    getListToRender(values) {
        return values.map((value, index)=> {
            return <li key={index}>
                <Square value={this.state.values[index]}
                        onClick={() => this.handlerSquareClicked(index)}
                />
            </li>
        });
    }

    calculateWin(values, player) {
        var winner = this.logic.isWin(values, player);
        if (winner !== CONSTANTS.UNSET) {
            this.setState((prevState, prop) => {
                const newState = prevState.splice();
                return {
                    newState,
                    winner: player
                };
            });
        }
    }

    getMessage(){
        if(this.state.winner !== CONSTANTS.UNSET){
            return <h2>Next player is {this.showCurrentPlayer()}</h2>
        }
        return <h2>Winner is {this.showCurrentPlayer()} Hurrah!!! </h2>
    }

    render() {
        const list = this.getListToRender(this.state.values);
        return (
            <div>
                {this.getMessage()}
                <ul className="board">{list}</ul>
            </div>);
    }
}
