import React, {Component} from 'react';
import Nav from './components/common/navbar'
import Search from './components/common/search'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      title: 'React Js CRUD'
    }
  }

  render(){
    return(
      <div className="App">
          <Nav />
          <Search />
      
        
        <button>ADD</button>
      </div>
    );
  }
}

export default App;
