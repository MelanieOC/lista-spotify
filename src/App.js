import React, { Component } from 'react';
import playlist from './Store.js';
import Album from './Album.js';
import List from './list.js'
import { connect } from "redux-zero/react";
import './css/main.css';

const ListSpotify = ({ playlist, currentIndex, play, follow }) => {
  return (
    <div className="container" style={{ color: 'white' }}>
      <div className='fondo'></div>
      <div class="row" style={{ marginTop: '20px' }}>
        <div class="col-md-3 col-lg-4">
          <Album list={playlist.length} play={play} follow={follow} />
        </div>
        <div class="col-md-9 col-lg-8 ">
          {
            playlist.map((a, index) => {
              return <List title={a.title} artist={a.artist} duration={a.duration} index={index + 1} currentIndex={currentIndex} play={play} />;
            })
          }
        </div>
      </div>
      {play &&
        <iframe src={playlist[currentIndex].src} style={{ position: 'fixed', bottom: 0, left: 0 }} width="100%" height="80" frameborder="0" allowtransparency="true"></iframe>}
    </div>
  );
}


const mapToProps = ({ playlist, currentIndex, play, follow }) => ({ playlist, currentIndex, play, follow });
export default connect(mapToProps)(ListSpotify);
