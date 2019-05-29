import React from 'react';
import MortgageCalculator from "../components/MortgageCalculator";
import MortgageForm from "../components/MortgageForm";
import MortgageDisplay from "../components/MortgageDisplay";


class MortgageCalculatorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


        data:[
          {
            id:1,
            name:  "",
            age: "",
            income: "",
            outcome: "",

          },

        ]
      }

      this.handleFormSubmit = this.handleFormSubmit.bind(this);



    }




 handleFormSubmit(submittedForm){
   submittedForm.id = Date.now();
   const updateForm = [...this.state.data, submittedForm]
   this.setState({data: updateForm});

 }





      render(){

         return(
             <div>
         <h2>MortgageForm</h2>

         <MortgageForm onSubmit={this.handleFormSubmit}/>
         <MortgageCalculator data={this.state.data}/>




        </div>
      )
     }
    }
    export default MortgageCalculatorContainer;
