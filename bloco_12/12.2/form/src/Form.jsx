import React from 'react';

class Form extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      favoriteCar: '',
    }
    this.handleName = this.handleName.bind(this);
    this.favoriteCar = this.favoriteCar.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value})
  }

  favoriteCar(event) {
    this.setState({favoriteCar: event.target.value})
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="">
            Qual carro você prefere?
            <select id="cars" value={this.state.favoriteCar} onChange={this.favoriteCar}>
              <option value="Volvo">Volvo</option>
              <option value="civicSI">Civic SI</option>
              <option value="Jetta">Jetta</option>
            </select>
          </label>
          <label htmlFor="">
            Name
            <input type="text" value={this.state.name} onChange={this.handleName}/>
          </label>
        </form>
      </div>
    )
  }
}

export default Form;