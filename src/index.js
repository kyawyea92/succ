import React from 'react';
import ReactDom from 'react-dom';
import ItemsList from './item/itemslist';
import './index.css';
import TitleBar from './title/titleBar';
import Footer from './footer/footer';
import ProductDetail from './productInfo/productDetail';
class App extends React.Component{
    
   render(){
    return (
        <div className='mainDiv'>
            <TitleBar/>
            <ProductDetail/>
            <Footer/>
        </div>    
    );
   }
}

ReactDom.render(<App />, document.querySelector('#root'));