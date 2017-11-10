import React, { Component } from 'react';
import './css/main.css';
import { changePlay, changeFollow } from './actions.js';

const Album = ({ list, play, follow }) => {
  return (
    <div className='album row'>
      <div className="album album__picture col-xs-4 col-md-12 col-lg-12 col-xl-4">
        <img className='album album__picture--image img-responsive' src='https://i.scdn.co/image/8fceebd160a5efab9088f7a66e0555d70b44a520' />
      </div>
      <div className="album album__information col-xs-8 col-md-12 col-lg-12 col-xl-8 ">
        <h2>ELECTRO BR</h2>
        <p>By<b>Spotify</b></p>
        <p className='album__information album__information--songs songs'>{list} SONGS</p>
        <div className="album__buttons">
          <button className='album__buttons album__buttons--green album__buttons--pause album__buttons--play btn btn-green' onClick={() => changePlay()}>{play ? 'PAUSE' : 'PLAY'}</button>
          <div className="album__buttons">
            <button className='album__buttons album__buttons--transparent album__buttons--follow album__buttons--unfollow btn btn-transparent'onClick={() => changeFollow()}>{follow ? 'UNFOLLOW' : 'FOLLOW'}</button>
            <button className='album__buttons album__buttons--transparent btn btn-transparent'><img src='' />...</button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Album;