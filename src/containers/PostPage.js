import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadPost } from '../actions'

const loadData = (loadPost, post) => {
  loadPost(post)
}

class PostPage extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    loadPost: PropTypes.func.isRequired
  }

  componentWillMount() {
    loadData(this.props.loadPost, this.props.params.post)
  }

  componentWillReceiveProps(nextProps) {
      this.props = nextProps
  }

  render() {
    const { post} = this.props
    return (
      <div className='page-content'>
        <h3>{post.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post
  }
}

export default connect(mapStateToProps, {
  loadPost
})(PostPage)
