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

    getListToRender(values) {
        return values.map((value, index)=>{
            return <li key={index}>
                <Square value={this.state.values[index]}
                        onClick={() => console.log(value, index)}
                />
            </li>
        });
    }

    render(){
        const list = this.getListToRender(this.state.values);
        return <ul className="board">{list}</ul>;
    }
}
