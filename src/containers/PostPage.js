import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadPost } from '../actions'
import SocialLinks from '../components/SocialLinks/SocialLinks'
import '../styles/pages/PostPage.css'

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

  back() {
    window.history.back()
  }

  render() {
    const { post} = this.props
    return (
      <div id='post-page' className='page-content'>

        <div className='row'>
          <div className='back-button float-left'>
            <a onClick={this.back}><i className="fa fa-arrow-left" aria-hidden="true"></i></a>
          </div>
          <div className='float-right'>
            <SocialLinks></SocialLinks>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-12 post-content'>
            <h3>{post.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
        </div>
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
