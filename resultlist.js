import React, {Component} from 'react';

class ResultList extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    generateMovieRow() {
        return this.props.results.map(movie => {
            console.log(movie);
            return (
                <tr>
                    <td>{movie.episode_id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.release_date}</td>
                    <td>X</td>
                </tr>
            );

        });
    }
    render() {
        const movies = this.generateMovieRow();
        return (
        <table>
            <tbody>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Release</th>
                <th>Remove</th>
            </tr>
            {movies}
            </tbody>
        </table>
        );
    }
}

export default ResultList;