import React, { Component } from 'react';
import './App.css';


function sort(arr, key) {
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length-i-1; j++) {
      if(arr[j][key] < arr[j+1][key]) {
        let tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory : [
        {product: 'monitors', count: 0},
        {product: 'mice', count: 0},
        {product: 'chairs', count: 0},
        {product: 'hdmi-dvi connnectors', count: 0},
        {product: 'mini-dp connectors', count: 0}
      ]
    }
  }
  increment(i, amt) {
    let temp = [...this.state.inventory];
    temp[i].count += amt;
    sort(temp, 'count');
    this.setState({inventory: temp});

  }
  render() {
    return (
      <>
        <h1>Inventory</h1>
        <table border="1">
          <tbody>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Adjust</th>
          </tr>
          {
            this.state.inventory.map( (item, i) => 
              <tr key={i}>
                <td>{item.product}</td>
                <td>{item.count}</td>
                <td>
                  <button onClick={this.increment.bind(this, i, 1)}>+</button>
                  <button onClick={this.increment.bind(this, i, -1)}>-</button>
                </td>
              </tr>
            )
          }
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
