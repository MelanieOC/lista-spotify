import React, { Component } from 'react';
import playlist from './Store.js';
import Album from './Album.js';
import { connect } from "redux-zero/react";
import './App.css';
import { nextSong } from './actions.js';

const List = ({ title, artist, duration, index }) => {
  return (
    <div class="list">
      <div className="id">
        <span className="number">{index}.</span>
        <button className='play' onClick={()=>nextSong(index-1)}>
          <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
        </button>
      </div>
      <div className="titulo" style={{ textAlign: 'left' }}>
        <strong>{title}</strong>
        <p>{artist}</p>
      </div>
      <div className="duracion"><span> {duration}</span></div>
    </div>
  );
}

const App = ({ playlist, currentIndex }) => {

  return (
    <div className="container" style={{ color: 'white' }}>
      <div className='fondo'></div>
      <div class="row" style={{ marginTop: '20px' }}>
        <div class="col-md-3 col-lg-4">
          <Album list={playlist.length} />
        </div>
        <div class="col-md-9 col-lg-8 ">
          {
            playlist.map((a, index) => {
              return <List title={a.title} artist={a.artist} duration={a.duration} index={index + 1} />;
            })
          }
        </div>
      </div>
      <iframe src={playlist[currentIndex].src} style={{ position: 'fixed', bottom: 0, left: 0 }} width="100%" height="80" frameborder="0" allowtransparency="true"></iframe>
    </div>
  );
}

const mapToProps = ({ playlist, currentIndex }) => ({ playlist, currentIndex });
export default connect(mapToProps)(App);
