import React, { Component } from 'react';
import axios from 'axios';
import MainTable from './components/MainTable/MainTable';

axios.defaults.baseURL = 'https://restcountries.com/v2/';

export default class App extends Component {
  state = {
    CountryList: [

    ],
  }

  // componentDidMount() {
  // }


  render() {
    return (
      <div className='wrap'>
        <MainTable/>
      </div>
    )
  }
}
