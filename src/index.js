import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import ListSpotify from './App';
import { Provider } from "redux-zero/react";
import store from "./Store";
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
	<Provider store={store}>
		<ListSpotify />
	</Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
