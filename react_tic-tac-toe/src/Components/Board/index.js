import React, {Component} from 'react';
import Square from '../Square/index';
import Message from '../Message/Message';

import {Logic} from './Logic';
import {CONSTANTS} from './Constants';


import './style.css';

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
            winner: false
        };
    }

    isSquareSelected(index) {
        return this.state.values[index] !== CONSTANTS.UNSET;
    }

    getCurrentPlayer() {
        return this.state.xIsNext ? CONSTANTS.CROSS : CONSTANTS.CIRLCLE
    }

    handlerSquareClicked(index) {
        if (!this.isSquareSelected(index)) {
            const values = this.state.values.slice();
            values[index] = this.getCurrentPlayer();
            const currentPlayer = this.getCurrentPlayer();

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
        // var winner = this.logic.isWin(values, player);
        // if (winner !== CONSTANTS.UNSET) {
        //     this.setState((prevState, prop) => {
        //         const newState = prevState.splice();
        //         return {
        //             newState,
        //             winner: player
        //         };
        //     });
        // }
    }


    // isWin(array, player) {
    //     const binaryArray = Logic.convertBoardToBinaryArray(array, player);
    //     const number = Logic.convertBinaryArrayToNumber(binaryArray);
    //     if (this.winPossibilities.indexOf(number) > 0)
    //         return player;
    //     return CONSTANTS.UNSET;
    // }
    //

    // convertBoardToBinaryArray(values, player) {
    //     return values.map((value)=> {
    //         return value === player ? 1 : 0;
    //     });
    // }

    render() {
        const list = this.getListToRender(this.state.values);
        return (
            <div>
                <Message winner={this.state.winner}
                         player={this.getCurrentPlayer()}
                />

                <ul className="board">{list}</ul>
            </div>);
    }
}
