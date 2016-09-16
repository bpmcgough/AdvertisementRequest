import React from 'react';

export default class companyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'companyInfo',
      name: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      budget: ''
    };
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }

  handleCityChange(event) {
    this.setState({city: event.target.value});
  }

  handleStateChange(event) {
    this.setState({state: event.target.value});
  }

  handlePostalCodeChange(event) {
    this.setState({postalCode: event.target.value});
  }

  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePhoneChange(event) {
    this.setState({phone: event.target.value});
  }

  handleBudgetChange(event) {
    this.setState({budget: event.target.value});
  }

  submitForm() {
    this.props.submitForm('upload-creative', this.state);
  }

  render() {
    return (
      <div className="company-info">
        <div className="company-forms">
          <div className="company-form">
            <p>Please provide your company's address below</p>
            <input className="form-item input-item" type="text" placeholder="Company Name" onChange={this.handleNameChange.bind(this)}/>
            <input className="form-item input-item" type="text" placeholder="Address" onChange={this.handleAddressChange.bind(this)}/>
            <input className="form-item input-item" type="text" placeholder="City" onChange={this.handleCityChange.bind(this)}/>
            <input className="form-item input-item" type="text" placeholder="State" onChange={this.handleStateChange.bind(this)}/>
            <input className="form-item input-item" type="text" placeholder="Postal Code" onChange={this.handlePostalCodeChange.bind(this)}/>
          </div>
          <div className="company-form">
            <p>Please provide your point of contact's information below</p>
            <input className="form-item input-item" type="text" placeholder="Last Name" onChange={this.handleLastNameChange.bind(this)}/>
            <input className="form-item input-item" type="text" placeholder="First Name" onChange={this.handleFirstNameChange.bind(this)}/>
            <input className="form-item input-item" type="text" placeholder="Email Address" onChange={this.handleEmailChange.bind(this)}/>
            <input className="form-item input-item" type="text" placeholder="Phone Number" onChange={this.handlePhoneChange.bind(this)}/>
          </div>
        </div>
        <div className="company-form">
          Your company's total budget:
          <input className="budget-item input-item" type="text" placeholder="$" onChange={this.handleBudgetChange.bind(this)}/>
        </div>
        <a href="#" className="submit" onClick={this.submitForm.bind(this)}>Submit</a>
      </div>
    );
  }
};
