import React, { Component } from 'react';

class List extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.listTitle}</h1>
        <select value={this.props.value} onChange={this.handleChange}>
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
