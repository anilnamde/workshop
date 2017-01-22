import React from 'react';

export default function Moves(props) {
    return (<ul className="moves">
        {
            props.moves.map((item, i)=> {
                return <li key={i}>{item}</li>
            })
        }
    </ul>);
};
