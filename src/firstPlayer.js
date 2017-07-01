import React , {Component} from 'react';

class First extends Component{

    render(){
      return(
        <div id="firstPlayer">
          <h1 id="small">Ben</h1>
          <hr/>
          <h2 id="score">{this.props.playerOne}</h2>
        </div>
      );
    }
}

export default First;
