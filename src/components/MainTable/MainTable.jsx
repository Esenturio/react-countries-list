import React, { Component } from 'react'
import CountryInfo from '../CountryInfo/CountryInfo';
import CountriesItem from './../CountriesItem/CountriesItem';

import './MainTable.css'

import axios from 'axios';

export default class MainTable extends Component {

  state = {
    countries : [],
    currentCountry : 'United States of America',
    countryInfo: {
    }
  }

  changeCurrentCountry = (name) => {
    this.setState({currentCountry: name});
    // console.log('changeCurrentCountry');
  }

  async componentDidMount() {
    let res = await axios.get(`all/?fields=name`);
    let countries = res.data;
    this.setState({ countries });
  }

  render() {
    return (
      <div className='main-table flex'>
        <div className="countries-list">
          {
            this.state.countries.map(country => {
              return (
                <CountriesItem key={country.name} name={country.name} click={() => this.changeCurrentCountry(country.name)}/>
              )
            })
          }
        </div>
        <CountryInfo currentCountry={this.state.currentCountry} />
      </div>
    )
  }
}
