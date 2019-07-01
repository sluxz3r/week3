import React, {Component} from 'react';
import Nav from './components/common/navbar'
import Search from './components/common/search'
import Add from './components/common/add'
import Flex from './components/common/flex'
import './App.css';


class App extends Component{
  render(){
    return(
      <div className="App">
          <Nav />
          <Search />
          <Add />
          <Flex />
      </div>
    );
  }
}

export default App;
