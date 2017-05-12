import React, { Component } from 'react';

import CssDeclarator from './cssDeclarator'

import Comment from './comment'

class CssContainer extends Component {

	componentWillReceiveProps(nextProps){
		console.log(nextProps)
	}

	changeCss(item, property, value){
		this.props.changeCss(item, property, value)
	}



  render() {
    return (
    	<div>
        <Comment lang='css' comment="My Style Sheet"/>
    	<Comment lang='css' comment="Some font families you can use are: Satisfy, Dancing Script, Droid Sans, Love Ya Like A Sister, Josefin Sans, Francois One, Archivo Black, Cinzel, Righteous, Cardo"/>
    	
        <Comment lang='css' comment="It all looks a bit cramped at the moment, try adding a margin of '20px' to all the containers. The . before 'container' targets the class specified in the HTML, # targets the id"/>
            <CssDeclarator changeCss={this.changeCss.bind(this)} item="headerContainerCss" declarator="#headerContainer" properties={this.props.headerContainerCss}/>
        <Comment lang='css' comment="It all looks a bit cramped at the moment, try adding a margin of '20px' to all the containers. The . before 'container' targets the class specified in the HTML, # targets the id"/>
            <CssDeclarator changeCss={this.changeCss.bind(this)} item="headerContentCss" declarator="#headerContent" properties={this.props.headerContentCss}/>
       
    	
    	<Comment lang='css' comment="It all looks a bit cramped at the moment, try adding a margin of '20px' to all the containers. The . before 'container' targets the class specified in the HTML, # targets the id"/>
    	
    		<CssDeclarator changeCss={this.changeCss.bind(this)} item="containersCss" declarator=".container" properties={this.props.containersCss}/>
    	<Comment lang='css' comment="Now let's set a background colour.  You can write a color like 'red' or 'lightBlue' or you can write a hex code like '#61C6E8'. find the right colour at https://www.webpagefx.com/web-design/color-picker"/>	
    		<CssDeclarator changeCss={this.changeCss.bind(this)} item="containerCss" declarator="#background" properties={this.props.containerCss}/>
    	<Comment lang='css' comment="You need to set a width and height for the image.  This can be in px but it makes more sense to size these as a percentage of the container (e.g. '50%'), that way when the screen changes size it won't get too messy.  You can set one value to 'auto' so the image doesn't get distorted"/>	
	    	<CssDeclarator changeCss={this.changeCss.bind(this)} hasPosition={true} item="imageCss" declarator="#image" properties={this.props.imageCss}/>

    	<Comment lang='css' comment="Now set the colour and size of the title.  Font size is calculated in pixels e.g. '30px'.  You can also change the font.  The different fonts you can use are in a comment at the top of this page. We'll ignore the 'position' attribute for the time being.  "/>		
    		<CssDeclarator changeCss={this.changeCss.bind(this)} hasPosition={true} item="titleCss" declarator="#title" properties={this.props.titleCss}/>
    	<Comment lang='css' comment="You can select items with their tags too.  try setting the size and color of the <h3> tags"/>	
    		<CssDeclarator changeCss={this.changeCss.bind(this)} item="sectionHeaderCss" declarator="h3" properties={this.props.sectionHeaderCss}/>
    	<Comment lang='css' comment="You can increase the gap between the bullet points using the 'marginTop' property.  This is calculated in 'px'"/>
    		<CssDeclarator changeCss={this.changeCss.bind(this)} item="listItemCss" declarator=".listItem" properties={this.props.listItemCss}/>
	   <Comment lang='css' comment="You can turn bullet points off by setting list style type to 'none'"/>
	    	<CssDeclarator changeCss={this.changeCss.bind(this)} item="ingredientCss" declarator=".ingredient" properties={this.props.ingredientCss}/>
	    <Comment lang='css' comment="Try setting the list style type to 'decimal'"/>
	    	<CssDeclarator changeCss={this.changeCss.bind(this)} item="methodCss" declarator=".method" properties={this.props.methodCss}/>
 <Comment lang='css' comment="It all looks a bit cramped at the moment, try adding a margin of '20px' to all the containers. The . before 'container' targets the class specified in the HTML, # targets the id"/>
            <CssDeclarator changeCss={this.changeCss.bind(this)} item="footerContainerCss" declarator="#footerContainer" properties={this.props.footerContainerCss}/>
                <Comment lang='css' comment="It all looks a bit cramped at the moment, try adding a margin of '20px' to all the containers. The . before 'container' targets the class specified in the HTML, # targets the id"/>
            <CssDeclarator changeCss={this.changeCss.bind(this)} item="footerContentCss" declarator="#footerContent" properties={this.props.footerContentCss}/>
       
        
	    <Comment lang='css' comment="HTML renders each div below the one above.  If you want to get creative with the layout you have to start playing with the 'position' property. Try setting the position of the #titleContainer to 'absolute', then play around with the 'top', 'bottom', 'left' and 'right' properties.  Remember to only set one value on each axis, so top or bottom, not top and bottom"/>
	    	
	    	


   		</div>
   	 );
  }
}

export default CssContainer;
