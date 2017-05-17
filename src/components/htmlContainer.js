import React, { Component } from 'react';
import HtmlTag from './htmlTag'
import HtmlSingleTag from './htmlSingleTag'
import ImageTag from './imageTag'
import Comment from './comment'
import ContinueButton from './continueButton'
import CssLink from './cssLink'
class HtmlContainer extends Component {


	updateState(item, payload, key){
		console.log(item, payload, key)
		this.props.updateState(item, payload,key)
	}

	buttonAction(item, payload, key){
		console.log(item, payload, key)
	}

	removeItem(item, index){
		this.props.removeItem(item, index)
	}

	addItem(item){
		this.props.addItem(item)
	}


  render() {
  	console.log(this.props.title)
    return (
    	<div>
    		<Comment lang='html' comment="HTML (Hyper Text Markup Language) is the foundation of the web as it defines the structure. It can be described as the skeleton. At the beginning of a document, we declare that it is an HTML document that we are writing. Can you see where this is happening? All the white tags below are editable. Every tag you open, you have to close, i.e. <title></title>"/>
	    	<p className={this.props.classname + " inline"} style={{color:'rgb(101,101,101)'}}>&#60;!DOCTYPE html&#62; </p>
	    	<HtmlSingleTag tag="html" margin="0px" />
	    	 {/*head*/}
	    	 <Comment lang='html' comment=" Each web page has a 'head' and a 'body'. All the important information about the page, including the title, character set, styles, links, scripts, and other meta information goes in the head."/>
	    	<HtmlSingleTag tag="head" margin="15px" />
		   		{/*title*/}

		   		<Comment lang='html' comment="The title is what shows in the web browser tab."/>
		      	<HtmlTag margin='30px' index="0" contenteditable={false} item="pageTitle" identifier="uneditable" content="Coding Cocktails" tag="title" />
		      	<HtmlSingleTag tag="meta charset='UTF-8'" margin="30px" />
		 
		      	<Comment lang='html' comment="This is a link to your stylesheet.  You'll style the page later."/>
		      	<CssLink margin='30px'/>
			<HtmlSingleTag tag="/head" margin="15px" />
	   		{/*body*/}
	   		<Comment lang='html' comment="The <body> holds all of the information which is ultimately seen by the user."/>
			<HtmlSingleTag tag="body" margin="15px" />
			<Comment lang='html' comment=" We give our elements ids and classes so we can refer to them in other languages, for example, in CSS (Cascading Style Sheets). When you write HTML code from scratch you can make up your own class and id names. We're going to use these classes and ids to style the components in CSS (see tab named app.css)."/>
			<HtmlSingleTag tag="div" renderId="background" margin="30px" />


			<Comment lang='html' comment="  Below we have a <div> enclosing an <h1> tag. Divs are divisions or sections. 'h' tags are for headers. <h1> are the biggest headers and <h6> are the smallest."/>
			<HtmlSingleTag tag="div" renderId="headerContainer" margin="45px" />
				<HtmlTag margin='60px' contenteditable={false} content="Coding Cocktails" tag="h1" renderId="headerContent" identifier="uneditable"/>
			<HtmlSingleTag tag="/div" margin="45px" />


			

			<Comment lang='html' comment="Elements can have a class, an id or both. Ids refer to one-off elements whereas classes refer to groups of elements which behave in the same way. Here we only have one 'title' element so that is the id, but we have lots of content blocks so we are going to use the class name 'contentBlock' throughout."/>
			<HtmlTag margin='45px' contenteditable={true} content={this.props.title} tag="h1" renderId="title"  renderClass="contentBlock" updateState={this.updateState.bind(this)} index="0" item="title"identifier="title"/>
			   	
<Comment lang='html' comment="You can put images directly from the web into websites. Copy this link and paste it into a new tab in your browser. You'll see the same image. You can find a url for most images on the web by right-clicking it and selecting 'copy image url'."/>
			 <ImageTag identifier="imageTag" margin="45px" index="0" item="image" updateState={this.updateState.bind(this)} content={this.props.image}/>
			
			{/*ingredients*/}
			<Comment lang='html' comment="Every so often, coding languages get updated for simplicity and ease. An 'article' is a new HTML5 feature which makes it easy to manage self-contained content blocks."/>
			<HtmlSingleTag tag="article" renderClass="ingredients contentBlock" margin="45px" />
			<HtmlTag margin='60px' contenteditable={false} content="Ingredients" tag="h3" identifier="uneditable"/>
			
			<Comment lang='html' comment="Now, we're going to add some content ourselves. <ul> tags represent unordered lists. This means it doesn’t get numbered or affect anything if the order is altered. Go ahead and input the ingredients for your cocktail into this list."/>
			<Comment lang='html' comment={this.props.ingredientsComment}/>

			<HtmlSingleTag tag="ul" margin="60px" />
			{this.props.ingredients.map((ingredient, i) => {
				return(
				<HtmlTag showRemoveButton={true} removeItem={this.removeItem.bind(this)} margin='75px' key={i} item="ingredients" renderClass="listItem ingredient" updateState={this.updateState.bind(this)} index={i}contenteditable={true} content={ingredient} tag="li" identifier={'ingredients' + i}/>
				)
			})}
			<button onClick={this.addItem.bind(this, 'ingredients')} className="inline button addButton" style={{marginLeft: '75px'}}>+</button>
			<HtmlSingleTag tag="/ul" margin="60px" />
			<HtmlSingleTag tag="/article" margin="45px" />
			<Comment lang='html' comment="<ol> tags represent ordered lists. We'll use this to let the bartender know the order in which to make your cocktail."/>
			<HtmlSingleTag tag="article" renderClass="method contentBlock" margin="45px" />
			<HtmlTag margin='60px' contenteditable={false} content="Method" tag="h3" identifier="uneditable"/>
			<HtmlSingleTag tag="ol" margin="60px" />
			{this.props.methods.map((method, i) => {
				return(
		
				<HtmlTag showRemoveButton={true} removeItem={this.removeItem.bind(this)} margin='75px' key={i} renderClass="listItem method"  item="methods"updateState={this.updateState.bind(this)} index={i}contenteditable={true} content={method} tag="li" identifier={'method' + i}/>
				
			
				)
			})}
			<button onClick={this.addItem.bind(this, 'methods')} className="inline button addButton" style={{marginLeft: '75px'}}>+</button>
			
			<HtmlSingleTag tag="/ol" margin="60px" />
			<HtmlSingleTag tag="/article" margin="45px" />

		
			
			<HtmlSingleTag tag="/div" margin="30px" />

			<Comment lang='html' comment="Footers usually provide useful information about the website such as the copyright, company number, address, etc.  Let’s add the copyright and include the name of everyone in your team!"/>

		{/*Footer*/}
			<HtmlSingleTag tag="div" renderId="footerContainer" margin="30px" />
			<HtmlTag margin='45px' contenteditable={true} content={this.props.copyright} tag="p" renderId="footerContent"  renderClass="copyright" updateState={this.updateState.bind(this)} index="0" item="copyright" identifier="copyright"/>
			<HtmlSingleTag tag="/div" margin="30px" />
   			<HtmlSingleTag tag="/body" margin="15px" />

   			<HtmlSingleTag tag="/html" margin="0px" />



   		</div>
   	 );
  }
}

export default HtmlContainer;
