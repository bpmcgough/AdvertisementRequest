import React from 'react';

export default class Header extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className="header">
        <h1>Advertisement Request Form</h1>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
};
