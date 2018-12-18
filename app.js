import React, { Component } from 'react';
import ResultList from './resultlist';
import _keyBy from 'lodash/keyBy';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentOption : null, movies: [], results: []};
  }
  componentWillMount = () => {
    fetch('https://swapi.co/api/films/')
    .then(res => res.json()).then(body => {
      const keyedResults = _keyBy(body.results, 'episode_id');

      this.setState({movies: keyedResults});
    })
  }
  generateOptions = () => {
    let options = [];
    for(let key in this.state.movies) {
      const movie = this.state.movies[key];
      options.push(<option value={movie.episode_id}>{movie.title}</option>);
    }
    return options;
  }
  selectMovie = (movie) => {
    console.log(movie.target.value);
  }
  render() {
    const options = this.generateOptions();
    return (
      <div className="App">
        <select onChange={this.selectMovie} >
          {options}
        </select>
        <ResultList results={this.state.results}/>
      </div>
    );
  }
}

export default App;