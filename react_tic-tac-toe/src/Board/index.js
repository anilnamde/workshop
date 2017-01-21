import React, {Component} from 'react';
import Square from './../Square/index';
import './style.css';

const CONSTANTS = {
    CROSS: 'X',
    CIRLCLE: 'O',
    UNSET: '-'
};

export default class Board extends Component {
    constructor() {
        super();
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            values: Array(9).fill().map((e, index)=> CONSTANTS.UNSET),
            xIsNext: true
        };
    }

    isSquareSelected(index) {
        return this.state.values[index] !== CONSTANTS.UNSET;
    }

    showCurrentPlayer(){
        return this.state.xIsNext ? CONSTANTS.CROSS : CONSTANTS.CIRLCLE
    }

    handlerSquareClicked(index) {
        if (!this.isSquareSelected(index)) {
            const values = this.state.values.slice();
            values[index] = this.showCurrentPlayer();
            this.setState({
                xIsNext: !this.state.xIsNext,
                values
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
                <h2>Next player is {this.showCurrentPlayer()}</h2>
                <ul className="board">{list}</ul>
            </div>);
    }
}
