import React, { Component } from 'react';
import $ from "jquery";

class KnockupRender extends Component {



  render() {
    return (
           <div className="knockupContainer">
            <div className="iphoneContainer">
            	<img id="iphoneKnockup" src={require('../images/iphone.png')} />
   				<div className="scrollableContainer containerCss">
   					<div className="headerContainerCss headerContainer">
   						<h1 id="getOrderTitle" className="headerContentCss">Coding Cocktails</h1>
   					</div>
   					<div style={{padding:'5%'}}>
			            <h1 className="titleCss containersCss">{this.props.title}</h1>
			            <img className="imageCss containersCss" src={this.props.image} />

			            <div className="ingredientsCss containersCss">
			              <h3 className="sectionHeaderCss">Ingredients</h3>
			              <ul>
			                {this.props.ingredients.map((ingredient, i) => {
			                  return(
			                    <li className="ingredientCss listItemCss" key={i}>{ingredient}</li>
			                  )
			                })}
			              </ul>
			            </div>


		            <div className="methodsCss containersCss">
		            <h3 className="sectionHeaderCss">Method</h3>
		              <ul>
		                {this.props.methods.map((method, i) => {
		                  return(
		                    <li className="methodCss listItemCss" key={i}>{method}</li>
		                  )
		                })}
		              </ul>
		              			          </div>
		            </div>
		            <div className="footerContainerCss containersCss">
		            	<p className="footerContentCss">{this.props.copyright}</p>
		            </div>
   				</div>
   			</div>
        </div>
    );
  }
}

export default KnockupRender;
