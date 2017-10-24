import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const List = () =>{
	return (<div>
            <div className="container">
              <div class="row">
                <div class="col-md-4">Aqui ira el album</div>
                  <div class="col-md-8 list">
                      <li><div className="id">
                        <span className="number">1.</span>
                        <span className="glyphicon glyphicon-play " id="play" aria-hidden="true"></span>
                        </div>
                          <div className="titulo">Primera cancion</div>
                          <div className="duracion"><span> 3.22 </span></div> 
                      </li> 
                  </div>
                </div>
              </div>
            </div>
	);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <List/>
      </div>
    );
  }
}

export default App;
