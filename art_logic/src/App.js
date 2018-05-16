import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {int_input: ''}
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <form action="">
          <input type="text" placeholder="Enter Integer to Decode" onChange={(int_input) => {this.setState({int_input})}} name={'int_input'}/>
          <button>Compute</button>
        </form>
      </div>
    );
  }
}

export default App;
