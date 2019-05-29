import React, {Component} from "react";
import MortgageDisplay from "./MortgageDisplay";


class MortgageCalculator extends Component{

  render(){

  const infoNodes = this.props.data.map(data => {
    return(
      <MortgageDisplay person={data.person} key={data.id}>
        <ul>
          <li>name: {data.person}</li>
          <li>age: {data.age}</li>
          <li>income: {data.income}</li>
          <li>outcome: {data.outcome}</li>
          <li>flat price: {data.predictedHousePrice}</li>
       </ul>


        </MortgageDisplay>
      );

  });

 const mortgage = this.props.data.map(data => {
   return(<MortgageDisplay person={data.person} key={data.id}>
     <li> available mortgageAmount: {(data.income - data.outcome)*(70-data.age)*2.5}</li>
   </MortgageDisplay>
 );

});





    return(
      <div className="mortgage-calculator">
       {infoNodes}
       {mortgage}

      </div>
    )
  }
}

export default MortgageCalculator;
