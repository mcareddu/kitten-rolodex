import './App.css';
import { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(monsters => this.setState({monsters}));
  }

  render() {
    return(
      <div className="App">
        {
          this.state.monsters.map(({ id, name }) => (
            <h1 key={ id }>{ name }</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
