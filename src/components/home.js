import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ImageTag extends Component {

  goToEditor(cocktail){

    var cocktail, firstIngredient;

    switch(cocktail){
      case 'MOJITO':
      cocktail = 'Mojito';
      firstIngredient = 'Bacardi Carta';
      break;

      case 'PINA':
      cocktail = 'Pina Colada';
      firstIngredient = 'Fresh Pineapple Chunks';
      break;
      
      case 'COSMOPOLITAN':
      cocktail = 'Cosmopolitan';
      firstIngredient = 'Orange Vodka';
      break;
      
      case 'MARGARITA':
      cocktail = 'Margarita';
      firstIngredient = 'Tequila';
      break;

      case 'BLACKBERRY':
      cocktail = 'Blackberry Mint Spritzer';
      firstIngredient = 'Fresh Blackberries';
      break;
    }

    this.props.history.push('/edit/' + cocktail + '/' + firstIngredient)
  }

  render() {
    return (
      <div className="homeBackground">
      <div className="homeOverlay">
      </div>
        <div className="homeSection" id="homeContainer">
          <div>
            <img id="homeLogo" src={require('../images/logoWhite.png')} />
          </div>

          <div>
            <img id="mofoLogo" src={require('../images/mofoWhite.png')} />
          </div>

        
            <p id="welcomeText">
            We are very excited to welcome you to our Coding Cocktails event.<br/><br/>

With software changing every industry, coding is becoming the most talked about and needed skill. <br/><br/>

Coding is the bridge between humans and computers. It is a set of rules or instructions that tell your computer what you want it to do. <br/><br/>

 It’s not as difficult as you may think! So, today, you are going to get an introduction to this world by coding your own mocktail or cocktail.<br/><br/>

Let’s begin! 
            </p>

            <div className="horizontalDivider">
            </div>

          <div id="selectCocktail">
            <h4 id="selectCocktailHeader">STEP 1:  select a cocktail</h4>
            <div onClick={this.goToEditor.bind(this, 'MOJITO')}className="selectCocktailButton" style={{background:'rgb(119,184,160)'}}>
              MOJITO
            </div>
            <div onClick={this.goToEditor.bind(this, 'PINA')}className="selectCocktailButton" style={{background:'rgb(234,181,69)'}}>
              PINA COLADA
            </div>
            <div onClick={this.goToEditor.bind(this, 'COSMOPOLITAN')}className="selectCocktailButton" style={{background:'rgb(204,90,123)'}}>
              COSMOPOLITAN
            </div>
            <div onClick={this.goToEditor.bind(this, 'MARGARITA')}className="selectCocktailButton" style={{background:'rgb(64,104,212)'}}>
              MARGARITA
            </div>
            <div onClick={this.goToEditor.bind(this, 'BLACKBERRY')}className="selectCocktailButton" id="lastButton" style={{background:'rgb(196,82,75)'}}>
              BLACKBERRY MINT
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}

export default ImageTag;
