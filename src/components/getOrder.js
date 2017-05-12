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

  componentWillMount(){
    console.log(this.props.match.params.id)
  }

  submitOrder(orderNumber){
    console.log(orderNumber)
  }


  render() {
    return(
      <div id="getOrderContainer">
<h1 id="getOrderTitle">Coding Cocktails</h1>
         
          <OrderRender orderId={this.props.match.params.id} FirebaseApp={this.props.FirebaseApp}/>
         </div>
    )

  }
}


export default GetOrder;
