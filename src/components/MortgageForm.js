import React, {Component} from "react";


class MortgageForm extends Component{
  constructor(props){
    super(props);
    this.state ={
      person: "",
      age: "",
      income: "",
      outcome: "",
      predictedHousePrice: "",
  


    };

    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleIncomeChange = this.handleIncomeChange.bind(this);
    this.handleOutcomeChange = this.handleOutcomeChange.bind(this);
    this.handlePredictedHousePriceChange = this.handlePredictedHousePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

handlePersonChange(evt){
  this.setState({person: evt.target.value});
}

handleAgeChange(evt){
  this.setState({age: evt.target.value});
}
handleIncomeChange(evt){
  this.setState({income: evt.target.value});
}

handleOutcomeChange(evt){
  this.setState({outcome: evt.target.value});
}

handlePredictedHousePriceChange(evt){
  this.setState({predictedHousePrice: evt.target.value});
}





handleSubmit(evt){
  evt.preventDefault();
  const person = this.state.person.trim();
  const age = this.state.age.trim();
  const income = this.state.income.trim();
  const outcome = this.state.outcome.trim();
  const predictedHousePrice = this.state.predictedHousePrice.trim();


  if(!income || !person || !age || !outcome || !predictedHousePrice){
    return
  }


  this.props.onSubmit({person: person, age: age, income: income, outcome: outcome, predictedHousePrice: predictedHousePrice });
  this.setState({person:"", age:"", income:"", outcome:"", predictedHousePrice:""});

};







  render(){
    return(
      <form className="mortgage-form" onSubmit={this.handleSubmit}>
      <input type="text"
      placeholder="Name"
      value={this.state.person}
      onChange={this.handlePersonChange}
      />
      <input type="number"
      placeholder="Age"
      value={this.state.age}
      onChange ={this.handleAgeChange}
      />
      <input type="number"
      placeholder="Income"
      value={this.state.income}
      onChange ={this.handleIncomeChange}
      />
      <input type="number"
      placeholder="Outcome"
      value={this.state.outcome}
      onChange ={this.handleOutcomeChange}
      />
      <input type="number"
      placeholder="PredictedHousePrice"
      value={this.state.predictedHousePrice}
      onChange ={this.handlePredictedHousePriceChange}
      />

      <input type="submit" value="Post" />
      </form>

    )
  }
}

export default MortgageForm;
