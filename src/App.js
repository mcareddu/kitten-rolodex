import logo from './logo.svg';
import './App.css';
import { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      string: 'Hello bro' 
    }
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'Hello bro!!!'})}>Change text</button>
        </header>
      </div>
    );
  }
}

export default App;
