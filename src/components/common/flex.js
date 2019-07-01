import React, { Component } from "react";
import './flex.css';

class Flex extends Component{

  render(){
    return(
      <div>
        <div class="flex-container">
            <div class='div2'>
              <p>
                <img class='img' src='https://ssvr.bukukita.com/babacms/displaybuku/98788_f.jpg'></img>
              </p>
            </div>
            <div class='div2'>
              <p>
                <img class='img' src='https://awsimages.detik.net.id/customthumb/2015/04/23/230/okd.jpg?w=780&q=90'></img>
              </p>
            </div>
            <div class='div2'>
              <p>
              <img class='img' src='https://awsimages.detik.net.id/customthumb/2015/04/23/230/okd.jpg?w=780&q=90'></img>
              </p>
            </div>
            <div class='div2'>
              <p>
                <img class='img' src='https://infoduniaanak.files.wordpress.com/2011/09/imut-22-karin-cetta.jpg'></img>
              </p>
            </div>

        </div>
      </div>
    );
  }
}

export default Flex;