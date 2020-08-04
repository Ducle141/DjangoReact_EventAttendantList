import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://triumph-foundation.org/wp-content/uploads/Untitled-design1.jpg"
          width="700"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        />
        <hr />
        <h1>Event Attendant List</h1>
      </div>
    );
  }
}

export default Header;
