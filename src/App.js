import React, { Component } from "react";

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Hamster",
		};

		console.log("11 ", "Inside constructor");
	}

	componentDidMount() {
		console.log("15 ", "Component Did Mount");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("19 Component Did Update");
		console.log(prevState, "prevState");
	}

	render() {
		return (
			<div style={{ textAlign: "center", marginTop: 50 }}>
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
