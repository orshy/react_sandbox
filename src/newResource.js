import React, { Component } from 'react';
import './App.css';

export default class NewResource extends Component{
  constructor() {
    super();
    this.state = {
      inputValue: '',
      urlValue: '',
      buttonValue: 'submit',
      list: [
      {
        name: 'Google',
        url: 'www.google.com'
      },
      {
        name: 'Yahoo',
        url: 'www.yahoo.com'
      },
      {
        name: 'reddit',
        url: 'www.reddit.com'
      },
      {
        name: 'npr',
        url: 'www.npr.com'
      },
      {
        name: 'BBC',
        url: 'www.BBC.co.uk'
      }
      ],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    this.setState({inputValue: e.target.value});
  }
  handleUrlChange(e) {
    this.setState({urlValue: e.target.value});
  }
  handleSubmit(e) {
    const newPerson = {
      name: this.state.inputValue,
      url: this.state.urlValue,
    }
    const newArray = [newPerson].concat(this.state.list)
    this.setState({list: newArray })
  }

  render() {

    return(
      <div className="App">
        <NewResourceInfo
          list={this.state.list}
          handleInputChange={this.handleInputChange}

          value={this.state.inputValue}
          handleSubmit={this.handleSubmit}

          url={this.state.urlValue}
          handleUrlChange={this.handleUrlChange}
        />
      </div>
    );
  }
}

class NewResourceInfo extends Component {
  render() {

    const ulStyle = {
      listStyleType: 'none',
      lineHeight: '2'
    };

    const listOfNames = this.props.list.map((individual, idx) => {
      return <li key={idx}>Name: {individual.name},<br /> Url: <a href={individual.url}>{individual.url}</a></li>
    });

    return(
      <div className="App">
        <h1>Another Input</h1>
        <input onChange={this.props.handleInputChange} value={this.props.inputValue}></input>
        <br />
        <input onChange={this.props.handleUrlChange} value={this.props.urlValue}></input>
        <br />
        <button onClick={this.props.handleSubmit}>submit</button>
        <ul style={ulStyle}>{listOfNames}</ul>
      </div>
    );
  }
}
