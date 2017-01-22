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

            const values = this.state.values.slice();
            values[index] = this.getCurrentPlayer();

            const currentPlayer = this.getCurrentPlayer(),
                currentValues = values;



            this.setState((prevState, prop) => {
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
                            this.state.moves.map((item)=> {
                                return <li>
                                    item
                                </li>
                            })
                        }
                    </ul>
                }
            </div>);
    }
}
