import jsdom from 'mocha-jsdom';

import ReactDOM from 'react-dom';
import App from './App';

describe("something ", ()=> {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

});
