import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'
import List from '../components/List/List'
import SideNavBar from '../components/SideNavBar/SideNavBar'

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
    let href = '/#/posts/' + item.id + '.json'
    return (
      <div key={item.title}><a href={href}>{item.title}</a></div>
    )
  }

  render() {
    const { posts } = this.props
    return (
      <div className='page-content'>
        <SideNavBar pageTitle={this.props.route.path}></SideNavBar>
        <div className='sidebar-page'>
          <p>Posts {this.props.route.path}</p>
          {this.props.children}
        </div>
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
