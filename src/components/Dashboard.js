import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
export class Dashboard extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand">
              <Link to='/dashboard/users'>Users</Link>
          </span>
          <span className="navbar-brand">
              <Link to='/dashboard/products'>Products</Link>
          </span>
          <span className="navbar-brand">
              <Link to='/dashboard/comments'>Comments</Link>
          </span>
        </nav>  
      </>
    );
  }
}