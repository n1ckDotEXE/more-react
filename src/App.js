import React, { PureComponent } from "react";
export class App extends PureComponent {
	state = {
		input: "hamster",
	};
	handleClickMe = () => {
		this.setState({
			input: "123",
		});
	};
	render() {
		console.log(15, "Inside Render");
		return (
			<div
				style={{
					textAlign: "center",
					marginTop: 10,
					backgroundColor: this.state.backgroundColor,
				}}
			>
				<button onClick={this.handleClickMe}>Click Me</button>
				<br />
				<div>{this.state.input}</div>
			</div>
		);
	}
}
export default App;
