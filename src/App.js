import React, { Component } from 'react';
import playlist from './Store.js';
import Album from './Album.js';
import List from './list.js'
import { connect } from "redux-zero/react";
import './css/main.css';

const ListSpotify = ({LIST, playlist, currentIndex, play, follow }) => {
  return (
    <div className="container playlist">
      <div className='playlist__fondo'></div>
      <div class="row playlist__body">
        <div class="col-md-3 col-lg-4">
          <Album list={LIST} play={play} follow={follow} />
        </div>
        <div className="col-md-9 col-lg-8 ">
          {
            playlist.map((a, index) => {
              return <List title={a.title} artist={a.artist} duration={a.duration} index={index + 1} currentIndex={currentIndex} play={play} />;
            })
          }
        </div>
      </div>   
      {play &&
        <iframe src={playlist[currentIndex].src} className='playlist__iframe' allowtransparency="true"></iframe>}
    </div>
  );
}


const mapToProps = ({ LIST, playlist, currentIndex, play, follow }) => ({ LIST, playlist, currentIndex, play, follow });
export default connect(mapToProps)(ListSpotify);
