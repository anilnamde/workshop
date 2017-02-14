import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import jsdom from 'mocha-jsdom';

describe("something ", ()=>{
  before(()=>{
    jsdom();
    global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
    global.window = document.defaultView;
    global.navigator = {userAgent: 'node.js'};
      global.React = React;
      global.window.React = React;
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

});
