import React, { Component } from 'react';
import './App.css';
import Child from './Child';
import Form from './Form';
import List from './List';

//parent component
class Parent extends Component {
  constructor() {
    super();
    this.state = {
      parentTitle: "Parent title text",
      value: '',
      listTitle: 'Select List',
      greeting: ''
    }
    //bind methods in constructor
    this.consoleLogChild = this.consoleLogChild.bind(this)
    this.titleChange = this.titleChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.displayGreeting = this.displayGreeting.bind(this)
  }

  //method
  consoleLogChild = () => {
    console.log("uhhhh");
  }

  displayGreeting() {
    var today = new Date().getHours();
    if (today > 7 && today < 19) {
      console.log("Good Morning!");
    } else {
      console.log("Good Evening!");
    }
  }

  titleChange() {
    this.setState({parentTitle: "Changed Parent title"});
    this.setState({child: "Changed Child text"});
    this.setState({button: "Changed Button text"});
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
        <h1> {this.state.parentTitle} </h1>
        <input type="text" placeholder="text" value={this.state.value}onChange={this.handleChange}/>
        <Child
          parentTitle={this.state.parentTitle}
        />
        <Form
          greetingTitle={this.state.greetingTitle}
          displayGreeting={this.state.displayGreeting}
        />
        <List
          listTitle={this.state.listTitle}
        />
      </div>
    );
  }
}


export default Parent;
