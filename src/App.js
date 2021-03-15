import React, { Component } from "react";
export class App extends Component {
	state = {
		input: "",
		toggleSubmit: true,
	};
	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = () => {
		this.setState({
			toggleSubmit: true,
		});
	};

	shouldComponentUpdate(nextProps, nextState) {
		console.log("23 Should Component Update");

		console.log(nextState);
		if (nextState.input === "123") {
			return false;
		}

		if (nextState.input === "hamster") {
			return false;
		}
		return true;
	}
	render() {
		return (
			<div
				style={{
					textAlign: "center",
					marginTop: 10,
					backgroundColor: this.state.backgroundColor,
				}}
			>
				<div>
					<input
						type="text"
						name="input"
						onChange={this.onChange}
						value={this.state.input}
					/>
				</div>
				<br />
				<br />
				<button onClick={this.handleSubmit}>Submit</button>
				<br />
				<br />
				{this.state.input}
			</div>
		);
	}
}
export default App;
