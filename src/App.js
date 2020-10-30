import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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

  handleSearchChange = ({ target }) => {
     this.setState(
       { searchField: target.value },
       () => console.log('Search updated:', this.state.searchField)
      );
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(
      ({ name }) => name.toLowerCase().includes(searchField.toLowerCase())
    );

    return(
      <div className="App">
        <SearchBox
          onChange={this.handleSearchChange}
          placeholder="Search Kittens"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
