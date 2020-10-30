import './App.css';
import { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monsters: [
        {
          name: 'Freezer'
        },
        {
          name: 'Cell'
        },
        {
          name: 'Majin Bu'
        },
      ]
    };
  }

  render() {
    return(
      <div className="App">
        {
          this.state.monsters.map(({ name }, idx) => <h1 key={ idx }>{ name }</h1>)
        }
      </div>
    );
  }
}

export default App;
