import React, { Component } from 'react'
import { connect } from 'react-redux'

class AboutPage extends Component {

  render() {

    return (
      <div className='page-content'>
        <h3>Home Page</h3>
        <a href='#/portfolio'>Portfolio</a>
        <br />
        <a href='#/blog'>Blog</a>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps, {})(AboutPage)
