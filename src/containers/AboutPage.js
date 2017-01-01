import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class AboutPage extends Component {
  static propTypes = {}

  render() {

    return (
      <div>
        <p>About</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps, {})(AboutPage)
