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
      <CardList>
        {
          this.state.monsters.map(({ id, name }) => (
            <h1 key={ id }>{ name }</h1>
          ))
        }
      </CardList>
    );
  }
}

export default App;
