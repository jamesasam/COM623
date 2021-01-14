import React, { Component, Fragment } from "react";
import Fifa from './assets/images/Fifa.jpg';
import Park from './assets/images/Park.jpg';
import Study from './assets/images/Study.jpeg';
import Cinema from './assets/images/Cinema.jpg';
 
class Home extends Component {
  render() {
    return (
        <Fragment>

        
      <div>
        <h1>Welcome</h1>
        <p>This website is for students who are looking to find events happening around Solent University.</p>
        <h2>Recent Bookings:</h2>
        <br></br>
      </div>

      <div class="row">
  <div class="column">
    <div class="card">FIFA Tournament
    <br></br>
    <img class="fifa" src={Fifa}></img>
    </div>
  </div>
  <div class="column">
    <div class="card">Walk in the Park
    <img class="park" src={Park}></img>
    </div>
  </div>
  <div class="column">
    <div class="card">Library Study
    <br></br>
    <img class="study" src={Study}></img>
    </div>
  </div>
  <div class="column">
    <div class="card">Cinema
    <br></br>
    <img class="cinema" src={Cinema}></img>
    </div>
  </div>
</div>
      </Fragment>

    );
  }
}


export default Home;