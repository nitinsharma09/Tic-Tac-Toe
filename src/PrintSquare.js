import React ,{Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

class Square extends Component{

	constructor(props)
	{
		super(props)
		this.change = this.change.bind(this);
	}

	change(){
		console.log("In Change" + this.props.index);
		this.props.update(this.props.index);
	}

	render(){
		return(
			<div>
						<div id="square" onClick={this.change}>
							<div id="text">{this.props.val}</div>
						</div>
			</div>
		);
	}
}

export default Square;
