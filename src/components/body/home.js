import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to Home</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/shortlist">Shortlist</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Home;
