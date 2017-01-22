import React, { Component } from 'react';
import Game from '../Game/index';

import Message from '../Message/Message';

import './App.css';

class App extends Component {
  render() {
    return (<div>

          <Game />
          <br/>
          <Message winner={false} player={'X'}/>
          <Message winner={true} player={'X'}/>
        </div>

    );
  }
}

export default App;
