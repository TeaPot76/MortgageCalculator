import React, {Component} from "react";


class MortgageForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      person: 0,
      age: 0,
      income: 0,
      outcome: 0,
      predictedHousePrice: 0

    };

    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleIncomeChange = this.handleIncomeChange.bind(this);
    this.handleOutcomeChange = this.handleOutcomeChange.bind(this);
    this.handlePredictedHousePriceChange = this.handlePredictedHousePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };



handleSubmit(evt){
  evt.preventDefault();
  const person = this.state.person;
  const age = this.state.age;
  const income = this.state.income;
  const outcome = this.state.outcome;
  const predictedHousePrice = this.state.predictedHousePrice;
  const submission = {
    person,
    age,
    income,
    outcome,
    predictedHousePrice,
  };


  this.props.onFormSubmit(submission);
  this.setState({person: 0, age: 0, income: 0, outcome: 0, predictedHousePrice: 0});

};

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


  render(){
    return (
      <form className="mortgage-form" onSubmit={this.handleSubmit}>
      <label>Required details</label>
      <input
      id = "name"
      type="text"
      step ="any"
      min ="0"
      placeholder="Name"
      value={this.state.person}
      required
      onChange={this.handlePersonChange}
      />
      <input
      id = "age"
      type="number"
      step="any"
      min="0"
      placeholder="Age"
      onChange ={this.handleAgeChange}
      value={this.state.age}

      />
      <input
      id ="income"
      type="number"
      step ="any"
      min ="0"
      placeholder="Income"
      onChange ={this.handleIncomeChange}
      value={this.state.income}

      />
      <input
      id = "outcome"
      type="number"
      step ="any"
      min ="0"
      placeholder="Outcome"
      onChange ={this.handleOutcomeChange}
      value={this.state.outcome}

      />
      <input
      id = "predictedHousePrice"
      type="number"
      step ="any"
      min ="0"
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
