import './App.css';
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      search: '',
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
        <input
          type="search"
          placeholder="Search kittens"
          value={this.state.search}
          onChange={({ target }) => this.setState({ search: target.value }, () => console.log('Search updated:', this.state.search))}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
