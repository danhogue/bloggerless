import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class AboutPage extends Component {
  static propTypes = {}

  render() {

    return (
      <div className='page-content'>
        <p>About</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps, {})(AboutPage)
