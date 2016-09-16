import React from 'react';

export default class companyForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  submitForm(){
    
  }

  render() {
    return (
      <input type="submit" value="Submit" onPress={this.submitForm}/>
    );
  }
};
