import React, { Component } from 'react';
import './App.css';
import $ from "jquery";
import HtmlContainer from './components/htmlContainer'
import CssContainer from './components/cssContainer'
import { Link } from 'react-router-dom'
import KnockupRender from './components/knockupRender'
import Helper from './components/helper'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      helper: true,
      orderUrl: '',
      orderNumber: '',
      title: '...',
      image: require('./images/cocktail.png'),
      fullscreen: false,
      methods: ['Select your glass','Type method','Type method'],
      ingredients: ['Type ingedredient here','Type ingedredient here','Type ingedredient here'],
      copyright: "© ${YOUR NAME} 2017",
        containersCss: {
          marginTop: {property: 'marginTop', value: '  ', positionDependent: false, propertyName: 'margin-top'},
        },
        headerContainerCss: {
          backgroundColor: {property: 'backgroundColor', value: 'white', positionDependent:false, propertyName: 'background-color'},
          borderBottomColor: {property: 'borderBottomColor', value: '  ', positionDependent: false, propertyName: 'border-bottom-color'},
          borderBottomWidth: {property: 'borderBottomWidth', value: '  ', positionDependent: false, propertyName: 'border-bottom-width'},
          borderBottomStyle: {property: 'borderBottomStyle', value: '  ', positionDependent: false, propertyName: 'border-bottom-style'},
        },
        headerContentCss: {
          fontFamily: {property: 'fontFamily', value: '', positionDependent:false, propertyName: 'font-family'},
          color: {property: 'color', value: '', positionDependent:false, propertyName: 'color'},
          fontSize: {property: 'fontSize', value: '', positionDependent:false, propertyName: 'font-size'},
        },
        footerContentCss: {
          textAlign: {property: 'textAlign', value: '', positionDependent: false, propertyName: 'text-align'},
          fontFamily: {property: 'fontFamily', value: '', positionDependent:false, propertyName: 'font-family'},
          color: {property: 'color', value: '', positionDependent:false, propertyName: 'color'},
          fontSize: {property: 'fontSize', value: '', positionDependent:false, propertyName: 'font-size'},
        },
        sectionHeaderCss: {
          fontFamily: {property: 'fontFamily', value: '', positionDependent:false, propertyName: 'font-family'},
          color: {property: 'color', value: '', positionDependent:false, propertyName: 'color'},
          fontSize: {property: 'fontSize', value: '', positionDependent:false, propertyName: 'font-size'},
        },
        containerCss: {
          backgroundColor: {property: 'backgroundColor', value: 'white', positionDependent:false, propertyName: 'background-color'},
          paddingTop: {property: 'paddingTop', value: '50px', positionDependent:false, propertyName: 'padding-top'},
        },
        listItemCss: {
          color: {property: 'color', value: '', positionDependent:false, propertyName: 'color'},
          marginTop: {property: 'marginTop', value: '', positionDependent: false, propertyName: 'margin-top'},
          fontSize: {property: 'fontSize', value: '', positionDependent: false, propertyName: 'font-size'},
          fontFamily: {property: 'fontFamily', value: '', positionDependent:false, propertyName: 'font-family'},
        },
        imageCss:{
          marginLeft: {property: 'marginLeft', value: '', positionDependent: false, propertyName: 'margin-left'},
          width: {property: 'width', value: '', positionDependent: false, propertyName: 'width'},
          height: {property: 'height', value: '', positionDependent: false, propertyName: 'height'},

        },
        titleCss:{
          textAlign: {property: 'textAlign', value: '', positionDependent: false, propertyName: 'text-align'},
          fontFamily: {property: 'fontFamily', value: '', positionDependent: false, propertyName: 'font-family'},
          color: {property: 'color', value: '', positionDependent: false, propertyName: 'color'},
          fontSize: {property: 'fontSize', value: '', positionDependent: false, propertyName: 'font-size'},
          
        },
          
        methodCss:{
          listStyleType: {property: 'listStyleType', value: 'decimal', positionDependent: false, propertyName: 'list-style-type'},
        },
        ingredientCss:{
          listStyleType: {property: 'listStyleType', value: 'bullet', positionDependent: false, propertyName:  'list-style-type'},
        },
        footerContainerCss:{
          marginTop: {property: 'marginTop', value: '', positionDependent: true, propertyName: 'margin-top'},
          backgroundColor: {property: 'backgroundColor', value: 'white', positionDependent:false, propertyName: 'background-color'},
          paddingTop: {property: 'paddingTop', value: '  ', positionDependent: false, propertyName: 'padding-top'},
          paddingBottom: {property: 'paddingBottom', value: '  ', positionDependent: false, propertyName: 'padding-bottom'},
        }

    }
  }

  componentWillMount(){

    
    switch(this.props.match.params.title){

      case 'Mojito':
      this.setState({
                      image: 'http://www.pngmart.com/files/4/Mojito-Transparent-Background.png',
                      title: this.props.match.params.title, 
                      ingredients: [this.props.match.params.firstIngredient, 'Type ingredient', 'Type ingredient'],
                      ingredientsComment: 'A standard Mojito usually contains Bacardi Carta Blanco, fresh lime, mint leaves, brown sugar, soda water'
                    })
      break

      case 'Pina Colada':
      this.setState({
                      image: 'http://cookdiary.net/wp-content/uploads/images/Pina-Colada_6552.png',
                      title: this.props.match.params.title, 
                      ingredients: [this.props.match.params.firstIngredient, 'Type ingredient', 'Type ingredient'],
                      ingredientsComment: 'A standard Pina Colada usually contains Fresh pineapple chunks, pineapple Juice, caster sugar, coconut cream, Bacardi Carta Blanco'
                    })
      break

      case 'Cosmopolitan':
      this.setState({
                      image: 'http://www.uvvodka.com/wp-content/uploads/2013/01/recipelarge_crancosmo.png',
                      title: this.props.match.params.title, 
                      ingredients: [this.props.match.params.firstIngredient, 'Type ingredient', 'Type ingredient'],
                      ingredientsComment: 'A standard Cosmopolitan usually contains orange vodka, Cointreau liqueur, cranberry juice, lime juice'
                    })
      break 

      case 'Margarita':
      this.setState({
                      image: 'https://img.clipartfest.com/dd80746a4d7a366cf720b7fea6fcb6c6_margarita-clipart-margarita-clip-art-images-clipartallcom-margarita-clipart-transparent_652-1097.png',
                      title: this.props.match.params.title, 
                      ingredients: [this.props.match.params.firstIngredient, 'Type ingredient', 'Type ingredient'],
                      ingredientsComment: 'A standard Margarita usually contains tequila, triple sec liqueur, lime juice, 1 lime wedge, salt'
                    })
      break 

      case 'Blackberry Mint Spritzer':
      this.setState({
                      image: 'https://cdn.monin.com/m/media/catalog/product/cache/1/small_image/400x/1b6ac95abd88a964e3097b207dd0be58/B/l/Blackberry_Green_Tea-20170331083336.png',
                      title: this.props.match.params.title, 
                      ingredients: [this.props.match.params.firstIngredient, 'Type ingredient', 'Type ingredient'],
                      ingredientsComment: 'A standard Blackberry Mint Spritzer usually contains blackberries, mint leaves, lime Juice, simple syrup, soda water'
                    })
      break 

    }

  }


  changeCss(item, property, value){
    this.setState({helper: false})
    if (property !== 'fontFamily'){
    value = value.replace(/\s+/g, '');
    }
    value = value.replace(";", "");
    var stateCopy = this.state[item]
    stateCopy[property].value = value + ';';
    this.setState({[item]: stateCopy})
    var element = $('.' + item)
    $(element).css({[property]: value})
    console.log('setting .' + item + ' ' + property + ' to ' + value)
  }

  updateState(item, payload, key){
    this.setState({helper: false})
    switch(item){
      case 'title':
        this.setState({title: payload})
      break;
      case 'ingredients':
        var ingredients = this.state.ingredients;
        ingredients[key] = payload;
        this.setState({ingredients})
      break;
      case 'methods':
       var methods = this.state.methods;
        methods[key] = payload;
        this.setState({methods})
        break;
      case 'image': 
       this.setState({image: payload})
       break;
      case 'copyright':
      this.setState({copyright: payload}, () => {
        console.log(this.state.copyright)
      })
      break;
       default:
       return
    }
  }

  

  removeItem(item, index){
    console.log(this)
    switch(item){
      case 'methods':
      var methods = this.state.methods;
      methods.splice(index, 1);
      this.setState({methods})
      break;

      case 'ingredients':
      var ingredients = this.state.ingredients;
      ingredients.splice(index, 1);
      this.setState({ingredients})
      break;

      default:
      return
    }
  }

  addItem(item){
    switch(item){
      case 'methods':
      var methods = this.state.methods;
      methods.push('Type method')
      this.setState({methods})
      break;
      case 'ingredients':
      var ingredients = this.state.ingredients;
      ingredients.push('Type ingredient')
      this.setState({ingredients})
      break;

      default:
      return
    }
  }

  switchTab(tab){
    switch(tab){
      case 'html':
      $('#htmlTab').removeClass('inactiveTab').addClass('activeTab')
      $('#cssTab').removeClass('activeTab').addClass('inactiveTab')
      $('#cssContainer').css({'display':'none'})
      $('#htmlContainer').css({'display':'block'})
      break;
      case 'css':
      $('#htmlTab').removeClass('activeTab').addClass('inactiveTab')
      $('#cssTab').removeClass('inactiveTab').addClass('activeTab')
      $('#cssContainer').css({'display':'block'})
      $('#htmlContainer').css({'display':'none'})
      break;
    }    
  }

  submit(){

    var orderNumber = this.state.title.toLowerCase() + Math.round(Math.random() *10000)
    orderNumber = orderNumber.replace(/\s+/g, '');
    var self = this;
    this.setState({orderNumber})
    var data = {
      image: this.state.image,
      title: this.state.title,
      methods: this.state.methods,
      ingredients: this.state.ingredients,
      copyright: this.state.copyright,
      css: {
        footerContent: this.state.footerContentCss,
        footerContainer: this.state.footerContainerCss,
        headerContent: this.state.headerContentCss,
        headerContainer: this.state.headerContainerCss,
        listItem: this.state.listItemCss,
        container: this.state.containerCss,
        image: this.state.imageCss,
        title: this.state.titleCss,
        containers: this.state.containersCss,     
        method: this.state.methodCss,
        ingredient: this.state.ingredientCss,
        sectionHeader: this.state.sectionHeaderCss
      }
    }
    this.props.FirebaseApp.database().ref('/').update({
        [orderNumber]: data
    })
    console.log(data)
    var url = '/order-confirmation/' + orderNumber
    this.props.history.replace(url,'localhost:3000/')
    
  }

  fullscreen(){
    if (!this.state.fullscreen){
      $('#rightContainer').css({'display': 'none'})
      $('#leftContainer').animate({'width': '100%'})
      this.setState({fullscreen: true})
    } else {

       var timeout = setTimeout(function(){
        $('#rightContainer').css({'display': 'inline-block'})
        clearTimeout(timeout)
       },400)
      $('#leftContainer').animate({'width': '50%'})
      this.setState({fullscreen: false})
    }

  }


  render() {
      return (
        <div className="App">
          <div className="sectionContainer" id="leftContainer">
            <div id="leftNav">
              <img src={require('./images/logoWhite.png')} className="editorLogo" />
              <img src={require('./images/mofoWhite.png')} className="mofoEditorLogo" />
              <div className="editorTab activeTab" onClick={this.switchTab.bind(this,'html')}id="htmlTab"><h5>index.html</h5></div>
              <div className="editorTab inactiveTab" onClick={this.switchTab.bind(this,'css')}id="cssTab"><h5>app.css</h5></div>
              <div className="editorTab" onClick={this.submit.bind(this)}id="submitButton"><h5>SUBMIT ORDER</h5></div>
              <img src={require('./images/fullscreen.png')} onClick={this.fullscreen.bind(this)} className="fullscreen" />
            </div>
            <div id="textEditor">
              <div  className="codeContainer" id="htmlContainer">
                <HtmlContainer addItem={this.addItem.bind(this)} removeItem={this.removeItem.bind(this)}updateState={this.updateState.bind(this)}ingredients={this.state.ingredients} footer="boobyy"methods={this.state.methods} {...this.state}/>
              </div>
               <div  className="codeContainer" id="cssContainer">
                <CssContainer 
                  footerContainerCss={this.state.footerContainerCss}
                  footerContentCss={this.state.footerContentCss}
                  headerContentCss={this.state.headerContentCss}
                  headerContainerCss={this.state.headerContainerCss}
                  listItemCss={this.state.listItemCss}
                  headersCss={this.state.headersCss}
                  changeCss={this.changeCss.bind(this)}
                  containersCss={this.state.containersCss}
                  containerCss={this.state.containerCss}
                  sectionHeaderCss={this.state.sectionHeaderCss}
                  imageCss={this.state.imageCss}
                  titleCss={this.state.titleCss}
                  methodCss={this.state.methodCss}
                  ingredientCss={this.state.ingredientCss} />
              </div>
            </div>
          </div>
          <div className="sectionContainer" id="rightContainer">
          {(this.state.helper) ? <Helper /> : null }
            <KnockupRender {...this.state} />
          </div>
        </div>
      );

     

    
  }
}

export default App;
