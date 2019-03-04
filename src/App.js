import React, { Component } from 'react';
import Menu from './Menu';
import './Counter.css';
import {numberWithCommas} from './Util.js';

class App extends Component {
  state = {
    order: {},
    orderTotal: 0
  }
  
  updateOrder = ({ name, price }) => {
    //es5
    // const order = Object.assign({}, this.state.order, {
    //   [name]: price
    // });

    // const orderTotal = Object.keys(order).reduce((total, name) => {
    //   return total + order[name]
    // }, 0);

    //es6
    var order = this.state.order;
    order[name] = price;

    var orderTotal = 0; 
    for (var key in order) {
      orderTotal += order[key];
    }

    
    this.setState({
      order,
      orderTotal
    })
  }

  // //천단위 , 찍기
  // numberWithCommas(x) {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

  render() {
    return (
      <Menu
        orderTotal={numberWithCommas(this.state.orderTotal)}
        updateOrder={this.updateOrder} />
    );
  }

  // updateOrderTotal = (value) => {
  //   const total = this.state.orderTotal + value;

  //   this.setState({
  //     orderTotal: total
  //   })
  // }

  // render() {
  //   return (
  //     <Menu
  //       orderTotal={this.state.orderTotal}
  //       updateOrderTotal={this.updateOrderTotal} />
  //   );
  // }
}

export default App;
