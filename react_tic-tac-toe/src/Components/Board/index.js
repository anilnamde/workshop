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
            draw: false,
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
        if (!this.state.draw &&
            !this.state.winner &&
            !this.isSquareSelected(index)) {
            // we need to change things here

            const values = this.state.values.slice();
            const moves = this.state.moves.slice();

            // update array
            values[index] = this.getCurrentPlayer();

            // update moves from old data
            moves.push(`${values[index]} on ${index}`);

            // check winner now
            const winner = this.logic.hasWin(values, index);

            //check for draw
            // const draw = this.logic.hasDraw(values);

            this.setState(() => {
                return {
                    xIsNext: winner ? this.state.xIsNext : !this.state.xIsNext,
                    values,
                    moves,
                    draw: false,
                    winner
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
