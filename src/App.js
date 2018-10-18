import React, { Component } from 'react';
import Table from './Table.js';
import Form from './Form.js';
import Api from './Api.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		characters : []
	};

	removeCharacter = index => {
		const { characters } = this.state;

		this.setState({
			characters : characters.filter((character, i) => {
				return i !== index;
			})
		});
	}

	handleSubmit = character => {
		this.setState({characters : [...this.state.characters , character] });
	}

	render() {
		return (
			<div className="App">
				<Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
				<Form handleSubmit={this.handleSubmit} />
				<Api />
			</div>
		);
	}
}

export default App;
