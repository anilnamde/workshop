import React from 'react';
import './Moves.css';

export default function Moves(props) {
    return (<ul className="moves">
        {
            props.moves.map((item, i)=> {
                return <li key={i}>{item.values.join()}</li>
            })
        }
    </ul>);
};
