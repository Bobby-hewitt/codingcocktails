import React, { Component } from 'react';
import LoadingScreen from './loadingScreen'

import $ from "jquery";

class OrderRender extends Component {

  constructor(props){
    super(props)
    this.state = {
      image: null,
      ingredients: [],
      methods: [],
      title: '',
      loading: true
    }
  }

  componentWillMount(){
    console.log(this.props)
    var self = this;
    this.props.FirebaseApp.database().ref('/' + this.props.orderId).once('value').then((database) => {

      var data = database.val()
        self.setState({image: data.image, ingredients: data.ingredients, methods: data.methods, title: data.title}, () => {
          var topKeys = Object.keys(data.css)
          for (var i = 0; i < topKeys.length; i++){
            var attrKeys = Object.keys(data.css[topKeys[i]])
            for (var j = 0; j < attrKeys.length; j++){
              var value = data.css[topKeys[i]][attrKeys[j]].value
              value = value.replace(";", "");
              var property = data.css[topKeys[i]][attrKeys[j]].property
              
              if (value.length > 0){
                var element = '.render' + topKeys[i]
                console.log(element)
                $(element).css({[property]: value})
                console.log(topKeys[i], property, value)
              }
            }
            if (i === topKeys.length -1 ){
              var timeout = setTimeout(() => {
                $('#loadingScreen').animate({'opacity': '0'})
                var timeout2 = setTimeout(() => {
                  self.setState({loading: false}); clearTimeout(timeout)
                },500)
                
              },1000)
            }
          }

        })

    }).catch((err) => {
      console.log(err)
      })



console.log(this.props)

  }

  render() {
    return (
      <div className="rendercontainer" style={{width:'100%', height: '100%', position:'absolute', top:0, left:0, padding:'50px'}} >
          <h1 className="rendertitle rendercontainers">{this.state.title}</h1>
          <div className="renderingredients rendercontainers">
            <h3 className="renderheaders">Ingredients</h3>
            <ul>
              {this.state.ingredients.map((ingredient, i) => {
                return(
                <li key={i} className="renderingredient renderlistItem">{ingredient}</li>
                )
              })}  
            </ul>
          </div>
          <div className="rendermethods rendercontainers">
            <h3 className="renderheaders">Methods</h3>
            <ul>
              {this.state.ingredients.map((method, i) => {
                return(
                <li key={i} className="rendermethod renderlistItem">{method}</li>
                )
              })}  
            </ul>
          </div>
          <img src={this.state.image} className="rendercontainers renderimage" style={{zIndex: -1}}/>
          {(this.state.loading) ? <LoadingScreen/> : null}
      </div>
    );
  }
}

export default OrderRender;
