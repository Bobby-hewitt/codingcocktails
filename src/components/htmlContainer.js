import React, { Component } from 'react';
import HtmlTag from './htmlTag'
import HtmlSingleTag from './htmlSingleTag'
import ImageTag from './imageTag'
import Comment from './comment'
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
    		<Comment lang='html' comment="HTML provides the foundation of the web.  We declare at the beggining of each file that we are writing an HTML document. All the white tags below are editable"/>
	    	<p className={this.props.classname + " inline"} style={{color:'rgb(101,101,101)'}}>&#60;!DOCTYPE html&#62; </p>
	    	<HtmlSingleTag tag="html" margin="0px" />
	    	 {/*head*/}
	    	 <Comment lang='html' comment="Each web page has a 'head' and a 'body'.  All the important information about the page like it's title, the language it's written in and other data goes in the head"/>
	    	<HtmlSingleTag tag="head" margin="15px" />
		   		{/*title*/}
		   		<Comment lang='html' comment="The title is what shows in the web browser tab.  In HTML, every tag you open, you have to close, i.e. <title></title>"/>
		      	<HtmlTag margin='30px' index="0" contenteditable={false} item="pageTitle" identifier="uneditable" content="Coding Cocktails" tag="title" />
		      	<HtmlSingleTag tag="meta charset='UTF-8'" margin="30px" />
			<HtmlSingleTag tag="/head" margin="15px" />
	   		{/*body*/}
	   		<Comment lang='html' comment="The <body> holds all of the information which is ultimately seen by the user"/>
			<HtmlSingleTag tag="body" margin="15px" />
			<Comment lang='html' comment="We give our elemets 'IDs and classes so we can refer to them in other languages.  When you write HTML code from scratch you can make up your class and id names. Later we're going to use these classes and IDs to style the components."/>
			<HtmlSingleTag tag="div" renderId="background" margin="30px" />


			<Comment lang='html' comment="Below we have a <div> enclosing an <h1> tag.  Divs are divisions or sections. 'h' tags are for headers.  <h1> are the biggest headers and <h6> are the smallest.  "/>
			<HtmlSingleTag tag="div" renderId="headerContainer" margin="45px" />
				<HtmlTag margin='60px' contenteditable={false} content="Coding Cocktails" tag="h1" renderId="headerContent" identifier="uneditable"/>
			<HtmlSingleTag tag="/div" margin="45px" />


			

			<Comment lang='html' comment="Elements can have a class, an id or both.  Ids refer to one-off elements where as classes refer to groups of elements which behave in the same way.  Here we only have one 'title' element so that is the id, but we have lots of content blocks so we are going to use the class name 'contentBlock' throughout"/>
			<HtmlTag margin='45px' contenteditable={true} content={this.props.title} tag="h1" renderId="title"  renderClass="contentBlock" updateState={this.updateState.bind(this)} index="0" item="title"identifier="title"/>
			   	
<Comment lang='html' comment="You can put images directly from the web into websites.  Copy this link and paste it into a new tab in your browser.  You'll see the same image. You can find a url for most images on the web by right clicking it and selecting 'copy image url'."/>
			 <ImageTag identifier="imageTag" margin="45px" index="0" item="image" updateState={this.updateState.bind(this)} content={this.props.image}/>
			
			{/*ingredients*/}
			<Comment lang='html' comment="Every now and again coding languages get updated.  An 'article' is a new HTML5 feature which makes it easy to manage self contained content blocks."/>
			<HtmlSingleTag tag="article" renderClass="ingredients contentBlock" margin="45px" />
			<HtmlTag margin='60px' contenteditable={false} content="Ingredients" tag="h3" identifier="uneditable"/>
			
			<Comment lang='html' comment="Now we're going to add some content ourselves.  <ul> tags represent unordered lists.  Go ahead and input the ingredients for your cocktail into this list."/>
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
			<Comment lang='html' comment="<ol> tags represent ordered lists.  We'll use this to let the bartender know how to make your cocktail."/>
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

			<Comment lang='html' comment="Footers usually provide useful information about the website.  In ours we'll just have the copyright!"/>

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
