import React from 'react';
import ReactDOM from 'react-dom';

import Message from './Message';


describe('Message components', ()=> {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Message />, div);

        expect(div.innerHTML).toBe('');
    });
});
