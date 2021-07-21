import React from 'react';
import Order from './Order';


const orders = [
  {
    id: 102,
    user: "cena@gmail.com",
    product: "Razer Headphone",
    price: {
    value: 99.99,
    currency: "dollars"
    }
  },
  {
    id: 77,
    user: "cena@gmail.com",
    product: "Monster 500mL",
    price: {
      value: 9.99,
      currency: "dollars"
    }
  }
];

class ListProducts extends React.Component {
  render () {
    return (
      orders.map(({ id, user, product, price}) => (
        <div className="App">
        <h1> Orders recently created </h1>
        <Order key={id} 
          user={user} 
          product={product} 
          price={price}
        />
        </div>
       ))
    )
  }
}

export default ListProducts;