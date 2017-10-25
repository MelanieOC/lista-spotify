import React, { Component } from 'react';
import './Album.css';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: 'PLAY',
      follow: 'FOLLOW'
    };
    
  }
  render() {

    const changePlay = () => {
      if (this.state.play == 'PLAY') {
        this.setState({
          play: 'PAUSE'
        });
      }
      else {
        this.setState({
          play: 'PLAY',
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
        this.setState({
          follow: 'FOLLOW',
        });
      }
    }
    return (
      <div className='row'>
        <div className="col-xs-4 col-md-12 col-lg-12 col-xl-4">
          <img className='img-responsive' src='https://i.scdn.co/image/8fceebd160a5efab9088f7a66e0555d70b44a520' />
        </div>
        <div className="col-xs-8 col-md-12 col-lg-12 col-xl-8 ">
          <h2>ELECTRO BR</h2>
          <p>By<b>Spotify</b></p>
          <p className='songs'>{this.props.list} SONGS</p>
          <div>
            <button className='btn btn-green' onClick={() => changePlay()}>{this.state.play}</button>
            <div>
              <button className='btn btn-transparent' onClick={() => changeFollow()}>{this.state.follow}</button>
              <button className='btn btn-transparent'><img src='' /></button>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Album;