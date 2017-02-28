import 'whatwg-fetch';
import React from 'react';
import Nav from './Nav.jsx';
import API_KEY from '../constants.js';
import { SingleHero, EditHero, MergeHero } from 'hero';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      heros: []
    };
  }

  componentDidMount() {
    //this.fetchHeros();
  }

  fetchHeros() {
    fetch(`https://hero-merge.herokuapp.com/${API_KEY}/heroes`)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {

        this.setState({
          heros: json
        });
      })
      .catch(function (ex) {
        console.log('parsing failed', ex);
      });
  }

  render() {
    return (
      <div>
        <h1>Hero Merge</h1>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}