import React, { Component } from 'react';
import './Lifecycle.css';
export class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      details: {
        city: '',
        state: '',
      },
    };
  }
  componentDidMount() {
    console.log('mounting');
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  shouldComponentUpdate() {
    if (this.state.count === 10) {
      return false;
    }
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.details.city !== this.state.details.city) {
      console.log(prevState.details.city, this.state.details.city);
    }
  }
  componentWillUnMount() {
    clearInterval(this.timer);
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    let details = { ...this.state.details };
    details[name] = value;
    this.setState({ details });
  };
  render() {
    return (
      <div className="cl-content">
        <h4>Class Component</h4>
        <h5>(stateFull Component) </h5>
        <ul>1.ComponentDidMount</ul>
        <ul>2.ShouldComponentUpdate</ul>
        <ul>3.ComponentDidUpdate</ul>
        <ul>4.ComponentWillUnMount</ul>

        <h2>Timer: {this.state.count}</h2>
        <em>
          {this.state.details.city} {this.state.details.state}
        </em>
        <input
          type="text"
          name="city"
          value={this.state.details.city}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="state"
          value={this.state.details.state}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
