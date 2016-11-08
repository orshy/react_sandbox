import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <h2>{this.props.displayGreeting}</h2>
      </div>
    );
  }
}

export default Form;
