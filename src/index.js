import React from 'react';
import ReactDom from 'react-dom';
import ItemsList from './item/itemslist';
import './index.css';
class App extends React.Component{
    
   render(){
    return (
        <div className='mainDiv'>
            <ItemsList/>
        </div>    
    );
   }
}

ReactDom.render(<App />, document.querySelector('#root'));