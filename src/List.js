import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Week5'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Select value is: ' + this.state.value);
  }

  render() {
    return (
      <div>
        <h1>{this.props.listTitle}</h1>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="Week1">Week 1</option>
          <option value="Week2">Week 2</option>
          <option value="Week3">Week 3</option>
          <option value="Week4">Week 4</option>
          <option value="Week5">Week 5</option>
        </select><br />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default List
