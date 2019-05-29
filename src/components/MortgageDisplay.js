import React, {Component} from "react";

class MortgageDisplay extends Component{
  render(){
    return(
    <div className="mortgage-display">
      <p> {this.props.person}</p>
      <p> {this.props.children}</p>
    

    </div>
    )
  }
}

export default MortgageDisplay;
