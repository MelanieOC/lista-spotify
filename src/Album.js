import React, { Component } from 'react';
import './Album.css';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: 'REPRODUCIR',
      follow: 'FOLLOW'
    };
    this.myCounter = 0;
  }
  render() {

    const changePlay = () => {
      if (this.state.play == 'REPRODUCIR') {
        this.setState({
          play: 'PAUSE'
        });
      }
      else {
        this.setState ( {
          play: 'REPRODUCIR',
        });
      }
    }
    const changeFollow = () => {
      if (this.state.follow == 'FOLLOW') {
        this.setState({
          follow: 'UNFOLLOW'
        });
      }
      else {
        this.setState ( {
          follow: 'FOLLOW',
        });
      }
    }
    return (
      <div className='row'>
        <div className="col-xs-12 col-md-4 col-lg-3 col-xl-4 col-sticky">
          <div className='row'>
            <div className="col-xs-4 col-md-12 col-lg-3 col-xl-4 col-sticky">
              <img className='img-100' src='https://i.scdn.co/image/8fceebd160a5efab9088f7a66e0555d70b44a520' />
            </div>
            <div className="col-xs-8 col-md-12 col-lg-7 col-xl-8 col-sticky">
              <h2>ELECTRO BR</h2>
              <p>By<b>Spotify</b></p>
              <p>50 SONGS</p>
              <div>
                <button className='btn btn-green' onClick={() => changePlay()}>{this.state.play}</button>
                <button className='btn btn-trasparent' onClick={() => changeFollow()}>{this.state.follow}</button>
                <button className='btn btn-trasparent'><img src='' /></button>
              </div>
            </div>
          </div>
        </div >

      </div>
    );

  }
}

export default Album;