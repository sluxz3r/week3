import React, { Component } from "react";

class Search extends Component{

  render(){
    return(
      <div>
      <input placeholder='Search Book' 
      style={{
        borderRadius: '40px',
        height: '50px',
        width: '700px',
        textIndent: '40px',
        boxShadow: '0px 0px 2px #888888',

      }}></input>
      </div>
    );
  }
}


export default Search;