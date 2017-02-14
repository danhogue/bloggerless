import React, { Component, PropTypes } from 'react'
import './BreadCrumbs.css'

export default class BreadCrumbs extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="bread-crumbs-wrapper">
        <header>
          <a href='#'><i className="fa fa-home" aria-hidden="true"></i></a>
          <a href='#/blog'>Blog</a> >
          <a href='#/blog?cat1=Personal Me'> Personal Me</a> >
          <a href='#/blog?cat1=Personal Me&cat2=Work'> Work</a>
        </header>
      </div>
    )
  }
}
