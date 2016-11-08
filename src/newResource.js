import React, { Component } from 'react';
import './App.css';

export default class NewResource extends Component{
  constructor() {
    super();
    this.state = {
      inputValue: '',
      ageValue: '',
      buttonValue: 'submit',
      list: [
      {
        name: 'phil',
        age: 21
      },
      {
        name: 'derek',
        age: 51
      },
      {
        name: 'ted',
        age: 71
      },
      {
        name: 'todd',
        age: 91
      },
      {
        name: 'bob',
        age: 11
      }
      ],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    this.setState({inputValue: e.target.value});
  }
  handleAgeChange(e) {
    this.setState({ageValue: e.target.value});
  }
  handleSubmit(e) {
    const newPerson = {
      name: this.state.inputValue,
      age: this.state.ageValue,
    }
    const newArray = [newPerson].concat(this.state.list)
    this.setState({list: newArray })
  }

  render() {
    return(
      <div className="App">
        <NewResourceInfo
          list={this.state.list}
          onChange={this.handleInputChange}

          value={this.state.inputValue}
          handleSubmit={this.handleSubmit}

          age={this.state.ageValue}
          handleAgeChange={this.handleAgeChange}
        />
      </div>
    );
  }
}

class NewResourceInfo extends Component {
  render() {
    const listOfName = this.props.list.map((individual, idx) => {
      return <li key={idx}>{`Name: ${individual.name}, Age: ${individual.age}`}</li>
    });

    return(
      <div className="App">
        <h1>Another Input</h1>
        <input onChange={this.props.onChange} value={this.props.inputValue}></input>
        <input onChange={this.props.handleAgeChange} value={this.props.ageValue}></input>
        <button onClick={this.props.handleSubmit}>submit</button>
        <ul>{listOfName}</ul>
      </div>
    );
  }
}
