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

    reset() {
        this.setState(this.getInitialState());
    }

    getInitialState() {
        return {
            values: Array(9).fill().map((e, index)=> CONSTANTS.UNSET),
            xIsNext: true,
            winner: false,
            moves: []
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



            // we need to change
            // 1 moves to clean it
            // 2 xIsNext
            // 3 tic tac array
            // 4 update state for next player

            const values = this.state.values.slice();
            const moves = this.state.moves.slice();

            // uppdate array
            values[index] = this.getCurrentPlayer();

            //1. update moves from old data
            moves.push(`${values[index]} on ${index}`);

            this.setState(() => {
                return {
                    xIsNext: !this.state.xIsNext,
                    values,
                    moves
                };
            });

            // calculate the winner her and then
            if(this.isWinner(values, index)){
                console.log('And the winner is  .... :) ', this.getCurrentPlayer());
                return;
            }
        }
    }

    isWinner(values, index) {
        console.log('isWinner ',values, index)
        const currentPlayer = values[index];
        var numberIs = this.logic.convertBoardToNumber(values, currentPlayer);
        numberIs = this.logic.convertBinaryArrayToNumber(numberIs);
        return this.logic.hasWin(numberIs);
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

    render() {
        const list = this.getListToRender(this.state.values);
        return (
            <div>

                <Message winner={this.state.winner}
                         player={this.getCurrentPlayer()}
                />

                <ul className="board">{list}</ul>
                <input type="button" value="reset" onClick={()=> {
                    this.reset()
                }}/>
                {
                    <ul>
                        {
                            this.state.moves.map((item, i)=> {
                                return <li key={i}>
                                    {i}, {item}
                                </li>
                            })
                        }
                    </ul>
                }
            </div>);
    }
}
