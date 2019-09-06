import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {withRouter} from 'react-router-dom' // to access this.props.history.push()

class Header extends Component {
 render() {
  return (
   <div>
    Header
    <Link to="/">
     <button>Home</button>
    </Link>
    <Link to="/directory">
     <button>Directory</button>
    </Link>
   </div>
  );
 }
}

export default Header;
