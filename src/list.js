import React, { Component } from 'react';
import { nextSong, pause } from './actions.js';

const List = ({ title, artist, duration, index, currentIndex, play }) => {
    const comparar = currentIndex === index - 1;
    return (
      <div class="list">
        <div className={comparar ? 'id green' : 'id'}>
  
          {
            comparar && play ?
              <span className="glyphicon glyphicon-volume-up number green" aria-hidden="true"></span> :
              <span className="number">{index}.</span>
          }
  
          <button className='play' onClick={comparar && play ? () => pause() : () => nextSong(index - 1)}>
            {
              comparar && play ?
                <span className="glyphicon glyphicon-pause green" aria-hidden="true"></span> :
                <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
            }
  
          </button>
        </div>
        <div className="titulo" style={{ textAlign: 'left' }}>
          <strong className={comparar ? 'green' : ''}>{title}</strong>
          <p>{artist}</p>
        </div>
        <div className="duracion">
          <span className={comparar ? 'green' : ''}> {duration}</span>
        </div>
      </div>
    );
  }
  
  export default List;