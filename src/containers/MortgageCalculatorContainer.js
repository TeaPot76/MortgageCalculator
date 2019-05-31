import React from 'react';
import MortgageCalculator from "../components/MortgageCalculator";
import MortgageForm from "../components/MortgageForm";
import MortgageDisplay from "../components/MortgageDisplay";


class MortgageCalculatorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: "",
      age: "",
      income: "",
      outcome: "",
      predictedHousePrice: "",
      mortgageTerm: 25,
      intrestRate: 3.5

    };
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }




 handleFormSubmit(submittedForm){
   submittedForm.id = Date.now();
   const person= submittedForm.person;
   const age = submittedForm.age;
   const income = submittedForm.income;
   const outcome = submittedForm.outcome;
   const predictedHousePrice = submittedForm.predictedHousePrice;
   this.setState({
     person: person,
     age: age,
     income: income,
     outcome: outcome,
     predictedHousePrice: predictedHousePrice
   });

 }
      render(){

         return(
             <div>
         <h2>Mortgage Form</h2>

         <MortgageForm onFormSubmit={this.handleFormSubmit}/>
         <MortgageDisplay>
         <li>person={this.state.person}</li>
          <li>age={this.state.age}</li>
          <li>income={this.state.income}</li>
          <li>outcome={this.state.outcome}</li>
          <li>predictedHousePrice={this.state.predictedHousePrice}</li>

          </MortgageDisplay>

        </div>
      )
     }
    }
    export default MortgageCalculatorContainer;
