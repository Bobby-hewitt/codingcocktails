import React, { Component } from 'react';
import CssInput from './cssInput'
import $ from "jquery";
import OrderRender from './orderRender'

class GetOrder extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  submitOrder(orderNumber){
    console.log(orderNumber)
  }


  render() {
    return(
      <div id="getOrderContainer">
<h1 id="getOrderTitle">Coding Cocktails</h1>
        <div id="getOrderContentContainer">
         
          <OrderRender orderId={this.props.match.params.id}FirebaseApp={this.props.FirebaseApp}/>
        </div>
      </div>
    )

  }
}


export default GetOrder;
