import React, { Component } from 'react';
import playlist from './Store.js';
import './App.css';

const List = ({ title, artist, duration, index }) => {
  return (
    <div class="list">
      <div className="id">
        <span className="number">{index}.</span>
        <button className='play'>
          <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
        </button>
      </div>
      <div className="titulo" style={{textAlign:'left'}}>
        <strong>{title}</strong>
        <p>{artist}</p>
      </div>
      <div className="duracion"><span> {duration}</span></div>
    </div>
  );
}

class App extends Component {
  
  render() {
    return (
      <div className="container App">
        <div class="row" style={{marginTop:'20px'}}>
          <div class="col-md-3 col-lg-4">
            <p className="App-intro" style={{ color: 'white' }}>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
          <div class="col-md-9 col-lg-8 ">
            {
              playlist.map((a, index) => <List title={a.title} artist={a.artist} duration={a.duration} index={index + 1} />)
            }
          </div>
        </div>
        <iframe src="https://open.spotify.com/embed/track/79cuOz3SPQTuFrp8WgftAu" style={{ position: 'fixed', bottom: 0, left: 0 }} width="100%" height="80" frameborder="0" allowtransparency="true"></iframe>
      </div>
    );
  }
}

export default App;
