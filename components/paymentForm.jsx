import React from 'react';

export default class paymentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      CCNumber: '',
      expiry: '',
      CVC: '',
    };
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleCCNumberChange(event) {
    this.setState({CCNumber: event.target.value});
  }

  handleExpiryChange(event) {
    this.setState({expiry: event.target.value});
  }

  handleCVCChange(event) {
    this.setState({CVC: event.target.value});
  }

  submitForm() {
    this.props.submitForm('confirm', this.state);
  }

  render() {
    return (
      <div className="company-info">
        <div className="company-forms">
          <div className="company-form">
            <p>Please provide your payment information below</p>
            <input className="form-item input-item" type="text" placeholder="Name" onChange={this.handleNameChange.bind(this)}/>
            <input className="form-item input-item" type="text" placeholder="Credit Card Number" onChange={this.handleCCNumberChange.bind(this)}/>
            <input className="form-item input-item" type="text" placeholder="Expiration Date" onChange={this.handleExpiryChange.bind(this)}/>
            <input className="form-item input-item" type="text" placeholder="CVC" onChange={this.handleCVCChange.bind(this)}/>
          </div>
        </div>
        <a href="#" className="submit" onClick={this.submitForm.bind(this)}>Submit Order</a>
      </div>
    );
  }
};
