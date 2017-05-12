import React, { Component } from 'react';
import $ from "jquery";

class KnockupRender extends Component {



  render() {
    return (
           <div className="knockupContainer">
            <div className="iphoneContainer">
            	<img id="iphoneKnockup" src={require('../images/iphone.png')} />
   				<div className="scrollableContainer containerCss">
   					<h1 id="getOrderTitle">Coding Cocktails</h1>
		            <h1 className="titleCss containersCss">{this.props.title}</h1>

		            <div className="ingredientsCss containersCss">
		              <h3 className="headersCss">Ingredients</h3>
		              <ul>
		                {this.props.ingredients.map((ingredient, i) => {
		                  return(
		                    <li className="ingredientCss listItemCss" key={i}>{ingredient}</li>
		                  )
		                })}
		              </ul>
		            </div>

		            <div className="methodsCss containersCss">
		            <h3 className="headersCss">Method</h3>
		              <ul>
		                {this.props.methods.map((method, i) => {
		                  return(
		                    <li className="methodCss listItemCss" key={i}>{method}</li>
		                  )
		                })}
		              </ul>
		              
		            </div>
		            <img className="imageCss containersCss" src={this.props.image} />
		            <p>{this.props.copyright}</p>
   				</div>
   			</div>
        </div>
    );
  }
}

export default KnockupRender;
