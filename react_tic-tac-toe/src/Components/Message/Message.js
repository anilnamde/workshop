import React from 'react';
import './Message.css'

export default function Message(props) {
    if (props.draw) {
        return <h2>Game draw try again</h2>
    }

    if (!props.winner) {
        return <h2>Next player is {props.player}</h2>
    }
    else {
        return <h2>Winner is {props.player} Hurrah!!! </h2>
    }
};
