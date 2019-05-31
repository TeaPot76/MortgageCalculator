import React, {Component} from "react";
import MortgageDisplay from "./MortgageDisplay";


const MortgageCalculator =(props) => {
  if (props.income === null) {
    return(
      <></>
    )
  }



    return(
      <ul>
          <li>name: {props.person}</li>
          <li>age: {props.age}</li>
          <li>income: {props.income}</li>
          <li>outcome: {props.outcome}</li>
          <li>flat price: {props.redictedHousePrice}</li>
       </ul>


    )

  return(

    <MortgageDisplay person={props.person} key={props.id}>
     <li> available mortgageAmount: {(props.income - props.outcome)*(70-props.age)*2.5}</li>
   </MortgageDisplay>


);

}

export default MortgageCalculator;
