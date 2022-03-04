import React, { Component } from 'react'
import BorderItem from '../BorderItem/BorderItem'

import axios from 'axios';

export default class CountryInfo extends Component {

  state = {
    countryInfo: null
  }

  getInfo = async () => {
    let res = await axios.get(`name/${this.props.currentCountry}`);
    const country = res.data[0];

    let borders = [];

    console.log('componentDidUpdate')
    country.borders.length !== 0 ? (
      country.borders.forEach(async country => {
        console.log(country);
        let borderedCoun =  await axios.get(`alpha/${country}`);
        borders.push(borderedCoun.data.name);
      })
    ) : (
      borders.push('not borders')
    )

    borders = await Promise.all(borders);
    console.log(borders);

    this.setState({
      countryInfo: {
        name: country.name,
        population: country.population,
        flag: country.flags.png,
        borders: borders,
      }
    })
  }

  componentDidMount () {
    this.getInfo()
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.currentCountry === this.props.currentCountry) {
      return;
    }
    this.getInfo()
  }

  render() {

    if (this.state.countryInfo) {
      const {name, population, borders, flag} = this.state.countryInfo

    // console.log(this.state);

    return (
      <div className='country-info'>
        <div className="country-main-title flex">
          <h1 className="country-title">{name}</h1>
          <div className="country-image">
            <img src={flag} alt={name} />
          </div>
        </div>

        <div className="country-propulation">
          Population is {population}
        </div>

        <div className="country-borders">
          Borders with
          {/* {console.log( typeof borders, borders )} */}
          {
            borders.length !== 0 ? (
              borders.map(country => {
                console.log(country);
                return (
                  <BorderItem key={country} country={country}/>
                )
              })
            ) : (
              null
            )
          }
        </div>
      </div>
    )
    } else {
      return "Loading..."
    }
    
  }
}
