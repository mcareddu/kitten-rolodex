import './App.css';
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(monsters => this.setState({monsters}));
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(
      ({ name }) => name.toLowerCase().includes(searchField.toLowerCase())
    );

    return(
      <div className="App">
        <input
          type="search"
          placeholder="Search kittens"
          value={this.state.searchField}
          onChange={({ target }) => this.setState({ searchField: target.value }, () => console.log('Search updated:', this.state.searchField))}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
