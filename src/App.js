import React, { Component } from 'react';
import avatar from './images/avatar.jpg';
import './App.css';

import Tabs from './Tabs/Tabs'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={avatar} className="App-logo" alt="logo" />
				</div>
				<Tabs />
			</div>
		);
	}
}

export default App;
