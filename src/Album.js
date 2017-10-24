import React, { Component } from 'react';
import './Album.css';

class Album extends Component {
  render() {
    return (
      <div className= "col-xs-12 col-lg-3 col-xl-4 col-sticky">
        <header className="entity-info">
          <div className= "media-object">
            <div className= "media-object-hoverable">
              <div className = "react-contextmenu-wrapper">
                <div className = "cover-art shadow light actionable" aria-hidden="true">
                  <div>
                    <div className = "icon">
                      <svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                      <title>
                        Playlist Icon                      
                      </title>
                      <path rule="evenodd">

                      </path>

                      </svg>

                    </div>
                    <div className = "cover-art-image conver-art-image-loaded" style="background-image: url(https://i.scdn.co/image/7ddc3b84f82559787451d714e308580a1cfc)">

                    </div>
                    <button className = "cover-art-playback">
                      <svg className = "icon-play" viewBox="0 0 85 100">
                        <path fill="currentColor" d="M81 444">
                          <title>REPRODUCIR</title>

                        </path>

                      </svg>
                    </button>
                  </div>

                </div>
                <div className="mo-info">
                  <div className = "react-contextmenu-wrapper">
                    <div className = "mo-info-name" title="Made In Perú">Made In Perú

                    </div>

                  </div>

                </div>

              </div>
            <div className = "no-meta ellipsis-one-line">
              <span>
                "De"
              </span>
              <span>
                <a href="/user/spotify">Spotify</a>
              </span>
            </div>
            </div>
            <div className ="media-bd">
              <div className = "entity-name">
                <h2>Made In Perú</h2>
                <span>"De"</span>
                <span>
                  <a>
                    Spotify
                  </a>
                </span>
              </div>

            </div>
            <p className = "entity-long-description">"!Conoce el pasado, presente y futuro del sonido que ha puesto a Perú en el mapa musical global! Foto:Alejandro y Maria Laura"</p>
            <p ClassName = "text-silence entity-additional-info">"60 canciones"</p>
            <button className = "btn btn-green">REPRODUCIR</button>
            <div className = "follow horizontal-list">
              <button className = "btn btn-transparent">SEGUIR</button>
              <span className = "react-contextmenu-wrapper">
                <button className= "btn btn-transparent btn--narrow">
                  <div className= "spoticon-ellipsis-24">

                  </div>
                </button>
              </span>
            </div>

          </div>
        </header>
      </div>
    );
  }
}

export default Album;