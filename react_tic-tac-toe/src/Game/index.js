import React, {Component} from 'react';
import Board from '../Board';
import './style.css';

export default class Game extends Component {

    render() {
        return (<div className="game">
            <h2>Next player is {'X'}</h2>
            <Board />
        </div>)
    }
}



