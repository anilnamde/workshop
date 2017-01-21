import React, { Component } from 'react';
import Square from './../Square/index';
import './style.css';

export default class Board extends Component{
    constructor(){
        super();
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            values: Array(9).fill().map((e, index)=> '-')
        };
    }

    handlerSquareClicked(index){
        console.log(index)
        var values = this.state.values.slice();
        values[index] = 'X';
        this.setState({values});
    }

    getListToRender(values) {
        return values.map((value, index)=>{
            return <li key={index}>
                <Square value={this.state.values[index]}
                        onClick={() => this.handlerSquareClicked(index)}
                />
            </li>
        });
    }

    render(){
        const list = this.getListToRender(this.state.values);
        return <ul className="board">{list}</ul>;
    }
}
