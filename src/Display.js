import React,{Component} from 'react';

class Display extends Component{
	renderStart(){
		return(
				<div id="winner">
					<h3>Lets Play!!</h3>
				</div>
		);
	}

	renderContinue(){
		return(
				<div id="winner">
					<h3>Continue</h3>
				</div>
		);
	}

	renderWinner(){
		return(
				<div id="winner">
					<h3>Winner = {this.props.wins}</h3>
				</div>
		);
	}

	renderDraw(){
		return(
			<div id="winner">
				<h3>Result is Draw </h3>
			</div>
		);
	}

	render(){
		if(this.props.counter==0)
			return this.renderStart();
		else if((this.props.counter!=0) && (this.props.counter < 9))
			return this.renderContinue();
		else if((this.props.counter > 8) && (this.props.wins=='0'))
			return this.renderDraw();
		else
		{
			return this.renderWinner();
		}
	}
}

export default Display;