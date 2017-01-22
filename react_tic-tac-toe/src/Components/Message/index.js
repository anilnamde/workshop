import React from 'react';

export default function Message(props) {
    if(!props.winner){
        return <h2>Next player is {props.player}</h2>
    }else{
        return <h2>Winner is {props.player} Hurrah!!! </h2>
    }
};
