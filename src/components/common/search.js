import React, { Component } from "react";
import './search.css';

class Search extends Component{

  render(){
    return(
      <div>
      <input class='input' placeholder='Search Book . . .' >
      </input>
      </div>
    );
  }
}


export default Search;