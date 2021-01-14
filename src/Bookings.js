import React, { Component, Fragment } from "react";
 
class Bookings extends Component {
  render() {
    return (
      <Fragment>
          <div class="booking_container">
  <form action="action_page.php">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
    
    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
    
    <label for="type">Type</label>
    <select id="type" name="type">
      <option value="australia">Social</option>
      <option value="canada">Study</option>
      <option value="usa">Exercise</option>
    </select>
    

    <label for="subject">Subject</label>
    
    <textarea id="subject" name="subject" placeholder="Describe your event"></textarea>
    <input type="submit" value="Submit"></input>

  </form>
</div>
      </Fragment>
    );
  }
}
 
export default Bookings;