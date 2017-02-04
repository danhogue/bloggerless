import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadPost } from '../actions'

const loadData = ({ post, loadPost }) => {
  //loadPost(post)
}

class PostPage extends Component {
  static propTypes = {
    post: PropTypes.string.isRequired
  }

  componentWillMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
      this.props = nextProps
      loadData(this.props)
  }

  render() {
    const { post} = this.props
    return (
      <div className='page-content'>
        <h3>Post</h3>
        <p>{post}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  
  const post = ownProps.params.post

  return {
    post: post
  }
}

export default connect(mapStateToProps, {
  loadPost
})(PostPage)
