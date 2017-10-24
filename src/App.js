import React, { Component } from 'react';
import playlist from './Store.js';
import './App.css';

const List = ({ title, album, duration, index }) => {
  return (<div>
    <div className="container">
      <div class="row">
        <div class="col-md-4">{album}</div>
        <div class="col-md-8 list">
          <li><div className="id">
            <span className="number">{index}.</span>
            <span className="glyphicon glyphicon-play " id="play" aria-hidden="true"></span>
          </div>
            <div className="titulo">{title}</div>
            <div className="duracion"><span> {duration}</span></div>
          </li>
        </div>
      </div>
    </div>
  </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="container App">
        <div class="row">
          <div class="col-md-3 col-lg-4">
            <p className="App-intro" style={{ color: 'white' }}>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
          <div class="col-md-9 col-lg-8 ">
            <ul>
            {
              playlist.map((a,index)=><List title={a.title} album={a.album} duration={a.duration} index={index+1}/>)
            }
            </ul>
          </div>
        </div>
        <iframe src="https://open.spotify.com/embed/track/79cuOz3SPQTuFrp8WgftAu" style={{ position: 'fixed', bottom: 0, left: 0 }} width="100%" height="80" frameborder="0" allowtransparency="true"></iframe>
      </div>
    );
  }
}

export default App;
