import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'
import List from '../components/List/List'

const loadData = ({ loadPosts }) => {
  loadPosts()
}

class PostsPage extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    loadPosts: PropTypes.func.isRequired
  }

  componentWillMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps
  }

  renderItem(item) {
    return (
      <div key={item.title}>{item.title}</div>
    )
  }

  render() {
    const { posts } = this.props
    return (
      <div>
        <List renderItem={this.renderItem}
              posts={posts}
              loadingLabel={`Loading posts...`}
              />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let posts = Object.keys(state.posts).map((k) => state.posts[k])
  return {
    posts: posts
  }
} 

export default connect(mapStateToProps, {
  loadPosts
})(PostsPage)
