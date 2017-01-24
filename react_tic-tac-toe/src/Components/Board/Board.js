import React, {Component} from 'react';
import Square from '../Square/Square';
import Message from '../Message/Message';
import Moves from '../Moves/Moves';

import {Logic} from './Logic';
import {CONSTANTS} from './Constants';


import './Board.css';

export default class Board extends Component {
    constructor() {
        super();
        this.state = this.getInitialState();
        this.logic = new Logic();
    }

    reset() {
        this.setState(this.getInitialState());
    }

    undo() {

    }

    redo() {

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
        if (!this.state.draw && !this.state.winner && !this.isSquareSelected(index)) {
            // we need to change things here

            const values = this.state.values.slice();
            const moves = this.state.moves.slice();

            // update moves from old data
            moves.push({
                winner: this.state.winner,
                draw: this.state.draw,
                values: values,
                xIsNext: this.state.xIsNext,
                moves
            });

            // update array
            values[index] = this.getCurrentPlayer();

            // check winner now
            const winner = this.logic.hasWin(values, index);

            //check for draw
            const draw = this.logic.hasDraw(values);

            this.setState(() => {
                return {
                    xIsNext: winner ? this.state.xIsNext : !this.state.xIsNext,
                    values,
                    moves,
                    draw,
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
                         draw={this.state.draw}
                />

                <ul className="board">{list}</ul>
                <input type="button" value="reset" onClick={()=> {
                    this.reset()
                }}/>
                <input type="button" value="undo" onClick={()=> {
                    this.undo()
                }}/>
                <input type="button" value="redo" onClick={()=> {
                    this.redo()
                }}/>
                <Moves moves={this.state.moves}/>
            </div>);
    }
}
