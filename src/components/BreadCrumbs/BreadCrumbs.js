import React, { Component, PropTypes } from 'react'
import './BreadCrumbs.css'

export default class BreadCrumbs extends Component {
  static propTypes = {
      path: PropTypes.string
  }

  openMenue(e) {
    let sidebar = document.getElementById('sidebar')
    sidebar.classList.add("show-sidebar")
    return false;
  }

  render() {
    return (
      <div className="bread-crumbs-wrapper">
        <header>
          <ul>
            <li><a href='#'><i className="fa fa-home" aria-hidden="true"></i></a></li>
            <li><a href='#/blog'>Blog</a></li>
            <li><span> > </span><a href='#/blog?cat1=Professional Me'> Professional Me</a></li>
            <li><span> > </span><a href='#/blog?cat1=Personal Me&cat2=Leadership'> Leadership</a></li>
            <li className='float-right'>
              <a onClick={this.openMenue}><i className="fa fa-bars" aria-hidden="true"></i></a>
            </li>
          </ul>
        </header>
      </div>
    )
  }
}
