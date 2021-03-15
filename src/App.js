import React, { Component } from "react";

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Hamster",
			backgroundColor: "red",
			isToggle: false,
		};

		console.log("11 ", "Inside constructor");
	}

	componentDidMount() {
		console.log("15 ", "Component Did Mount");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("19 Component Did Update");
		console.log(prevState, "prevState");
		console.log(this.state, " this.state");

		console.log(prevState.name !== this.state.name);

		if (prevState.name !== this.state.name) {
			this.changeBackgroundColor();
		}
	}

	changeBackgroundColor = () => {
		this.setState({ backgroundColor: "blue" });
	};

	render() {
		return (
			<div
				style={{
					textAlign: "center",
					marginTop: 50,
					backgroundColor: this.state.backgroundColor,
				}}
			>
				<div> Name: {this.state.name} </div>
				<br />
				<button
					onClick={() =>
						this.setState({
							name: "Not a hamster",
						})
					}
				>
					Toggle Me
				</button>
			</div>
		);
	}
}

export default App;
