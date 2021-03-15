import React, { Component } from "react";
class ShowMe extends Component {
	state = {
		showMeMessage: "Show me message from ShowMe Component",
	};
	componentDidMount() {
		this.showMeSetTimeout = setTimeout(() => {
			this.setState({
				showMeMessage:
					"SetTime out ran, So you are seeing this message!",
			});
		}, 3000);
	}
	render() {
		return <div>{this.state.showMeMessage}</div>;
	}
}
export class App extends Component {
	state = {
		toggleShowMe: true,
	};
	toggleShowMe = () => {
		this.setState((prevState) => {
			return {
				toggleShowMe: !prevState.toggleShowMe,
			};
		});
	};
	render() {
		return (
			<div
				style={{
					textAlign: "center",
					marginTop: 10,
					backgroundColor: this.state.backgroundColor,
				}}
			>
				{this.state.toggleShowMe && <ShowMe />}
				<br />
				<button onClick={this.toggleShowMe}>Toggle Me</button>
			</div>
		);
	}
}
export default App;
