import React, { Component } from 'react';


class Places extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countries: [
        {name: 'United States'},
        {name: 'Brasil'},
        {name: 'Mexico'}
      ],
      states: [
        {name:'Tennessee'},
        {name: 'California'},
        {name: 'Florida'},
        {name: 'Arizona'}
      ]
    }
  }

  render() {

    let countriesVisited = this.state.countries.map(country =>
      <li key={ country.name }>{ country.name }</li>
    )
    let statesVisited = this.state.states.map(state =>
      <li key={ state.name }>{ state.name }</li>
    )

  return (
    <div>

      <ul>
        {countriesVisited}
      </ul>

      <ul>
        {statesVisited}
      </ul>
    </div>

  )
}

}
export default Places;
