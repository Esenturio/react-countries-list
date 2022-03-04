import React, { Component } from 'react'

export default class CountriesItem extends Component {
  render() {
    return (
      <div className='country__item'>
        <h3 className="country__name" onClick={this.props.click}>
          {this.props.name}
        </h3>
      </div>
    )
  }
}
