import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import SuccRoute from './route/route';
class App extends React.Component{
    
   render(){
    return (
        <div className='mainDiv'>
            <SuccRoute/>
        </div>    
    );
   }
}

ReactDom.render(<App />, document.querySelector('#root'));