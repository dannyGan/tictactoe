import React from "react";

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentValue: 0
		};
	}

	reset = () => {
		this.setState({
			currentValue: (this.state.currentValue = 0)
		});
	};

	increment = () => {
		this.setState({
			currentValue: this.state.currentValue + 1
		});
	};

	decrement = () => {
		this.setState({
			currentValue: this.state.currentValue > 0 ? this.state.currentValue - 1 : 0
		});
	};

	multiplyByTwo = () => {
		this.setState({
			currentValue: this.state.currentValue * 2
		});
	};

	divideByTwo = () => {
		this.setState({
			currentValue: this.state.currentValue / 2
		});
	};

	// decrement = () => {
	// 	this.setState({
	// 		currentValue: this.state.currentValue - 1
	// 	});
	// };

	render() {
		console.log(this.props);
		return (
			<div>
				<h1 class="opening">Feel free to use the operator number</h1>
				<br />
				<h1>
					<span class="displayNumber">{this.state.currentValue}</span>
				</h1>
				<br />

				<button class="counter" onClick={this.multiplyByTwo}>
					*
				</button>
				<button class="counter" onClick={this.increment}>
					+
				</button>
				<button class="counter" onClick={this.reset}>
					Reset!
				</button>
				<button class="counter" onClick={this.decrement}>
					-
				</button>
				<button class="counter" onClick={this.divideByTwo}>
					/
				</button>
			</div>
		);
	}
}
export default Counter;
