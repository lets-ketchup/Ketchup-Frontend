// pages/Home.js

import React from "react";
import { NavLink } from "react-router-dom";
import '../components/Loginform.js';
import LoginForm from '../components/Loginform.js';
import logo from '../components/logo.jpeg';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1 className="title is-1">This is the Home Page</h1>
      <div>
        <img src={logo}/>
        <div>Let's Ketchup</div>
      </div>
    </div>
    );
  }
}

export default Home;