import React, { Component } from 'react';
import { nextSong, pause } from './actions.js';
import './css/main.css';

const List = ({ title, artist, duration, index, currentIndex, play }) => {
    const comparar = currentIndex === index - 1;
    return (
      <div className="list">
        <div className={comparar ? 'list__id list--green' : 'list__id'}>
          {
            comparar && play ?
              <span className="glyphicon glyphicon-volume-up list__number" aria-hidden="true"></span> :
              <span className="list__number">{index}.</span>
          }
  
          <button className='list__play' onClick={comparar && play ? () => pause() : () => nextSong(index - 1)}>
            {
              comparar && play ?
                <span className="glyphicon glyphicon-pause list--green" aria-hidden="true"></span> :
                <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
            }
          </button>
        </div>

        <div className="list__title">
          <strong className={comparar ? 'list--green' : ''}>{title}</strong>
          <p>{artist}</p>
        </div>

        <div className="list__duration">
          <span className={comparar ? 'list--green' : ''}> {duration}</span>
        </div>
      </div>
    );
  }
  
  export default List;