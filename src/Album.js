import React from 'react';
import './css/main.css';
import { changePlay, changeFollow } from './actions.js';

const Album = ({ list, play, follow }) => {
  return (
    <div className='album row'>
      <div className="album album__picture col-xs-4 col-md-12 col-lg-12 col-xl-4">
        <img className='album album__picture--image img-responsive' src={list.image} />
      </div>
      <div className="album__information col-xs-8 col-md-12 col-lg-12 col-xl-8 ">
        <h2>{list.name}</h2>
        <p>By <b>{list.by}</b></p>
        <p className='songs'>{list.playlist.length} SONGS</p>
        <div>
          <button className='album__buttons album__buttons--green album__buttons--pause album__buttons--play ' onClick={() => changePlay()}>{play ? 'PAUSE' : 'PLAY'}</button>
          <div>
            <button className=' album__buttons album__buttons--transparent'onClick={() => changeFollow()}>{follow ? 'UNFOLLOW' : 'FOLLOW'}</button>
            <button className='album__buttons album__buttons--transparent '><img src='' />...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

    


export default Album;