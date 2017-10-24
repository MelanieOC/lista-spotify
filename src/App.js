import React, { Component } from 'react';
import playlist from './Store.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col xs={12} md={3} lg={3} xl={4}>
            <p className="App-intro" style={{ color: 'white' }}>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </Col>
          <Col xs={12} md={9} lg={9} xl={8}>
            
          </Col>
        </Row>
        <iframe src="https://open.spotify.com/embed/track/79cuOz3SPQTuFrp8WgftAu" style={{ position: 'fixed', bottom: 0, left: 0 }} width="100%" height="80" frameborder="0" allowtransparency="true"></iframe>
      </div>
    );
  }
}

export default App;
