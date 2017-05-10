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
	    	<p className={this.props.classname + " inline"} style={{color:'rgb(102,217,239)'}}>&#60;!DOCTYPE html&#62; </p>
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
			<HtmlSingleTag tag="div" renderId="background" margin="30px" />
			<Comment lang='html' comment="'h' tags are for headers.  <h1> is the biggest, it goes right through to <h6>"/>
			<HtmlTag margin='45px' contenteditable={true} content={this.props.title} tag="h1" renderId="title"  renderClass="container" updateState={this.updateState.bind(this)} index="0" item="title"identifier="title"/>
			   			{/*method*/}
			
			{/*ingredients*/}
			<HtmlSingleTag tag="article" renderClass="ingredients container" margin="45px" />
			<HtmlTag margin='60px' contenteditable={false} content="Ingredients" tag="h3" identifier="uneditable"/>
			<HtmlSingleTag tag="ul" margin="60px" />
			{this.props.ingredients.map((method, i) => {
				return(
				<HtmlTag showRemoveButton={true} removeItem={this.removeItem.bind(this)} margin='75px' key={i} item="ingredients" renderClass="listItem ingredient" updateState={this.updateState.bind(this)} index={i}contenteditable={true} content={method} tag="li" identifier={'ingredients' + i}/>
				)
			})}
			<button onClick={this.addItem.bind(this, 'ingredients')} className="inline button addButton" style={{marginLeft: '75px'}}>+</button>
			<HtmlSingleTag tag="/ul" margin="60px" />
			<HtmlSingleTag tag="/article" margin="45px" />
			<HtmlSingleTag tag="article" renderClass="method container" margin="45px" />
			<HtmlTag margin='60px' contenteditable={false} content="Method" tag="h3" identifier="uneditable"/>
			<HtmlSingleTag tag="ul" margin="60px" />
			{this.props.methods.map((method, i) => {
				return(
		
				<HtmlTag showRemoveButton={true} removeItem={this.removeItem.bind(this)} margin='75px' key={i} renderClass="listItem method"  item="methods"updateState={this.updateState.bind(this)} index={i}contenteditable={true} content={method} tag="li" identifier={'method' + i}/>
				
			
				)
			})}
			<button onClick={this.addItem.bind(this, 'methods')} className="inline button addButton" style={{marginLeft: '75px'}}>+</button>
			
			<HtmlSingleTag tag="/ul" margin="60px" />
			<HtmlSingleTag tag="/article" margin="45px" />

		{/*image*/}
		<Comment lang='html' comment="You can find an image you would like to use on the internet.  Right click it, select 'copy image source' and paste the result here"/>
			<ImageTag identifier="imageTag" margin="45px" contenteditable={true} index="0" item="image" updateState={this.updateState.bind(this)} content={this.props.image}/>
			<HtmlSingleTag tag="/div" margin="30px" />
			<HtmlSingleTag tag="div" renderId="footer" margin="30px" />
				
			<HtmlSingleTag tag="/div" margin="30px" />
   			<HtmlSingleTag tag="/body" margin="15px" />

   			<HtmlSingleTag tag="/html" margin="0px" />



   		</div>
   	 );
  }
}

export default HtmlContainer;
