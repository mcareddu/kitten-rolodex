import './App.css';
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";

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
      <CardList monsters={this.state.monsters} />
    );
  }
}

export default App;
