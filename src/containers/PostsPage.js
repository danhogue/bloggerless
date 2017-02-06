import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'
import List from '../components/List/List'
import SideNavBar from '../components/SideNavBar/SideNavBar'

const loadData = ({ loadPosts }) => {
  loadPosts()
}

const gatherPosts = function(obj, arr) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        if (Array.isArray(obj[prop])) {
          arr = arr.concat(obj[prop])
        } else {
          arr = gatherPosts(obj[prop], arr)
        }
    }
  }
  return arr
}

class PostsPage extends Component {
  static propTypes = {
    navKeys: PropTypes.object,
    posts: PropTypes.array.isRequired,
    loadPosts: PropTypes.func.isRequired
  }

  componentWillMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps
  }

  render() {
    const { posts } = this.props
    return (
      <div className='page-content'>
        <SideNavBar path={this.props.route.path} navKeys={this.props.navKeys}></SideNavBar>
        <div className='sidebar-page'>
          <List renderItem={this.renderItem}
              posts={posts}
              loadingLabel={`Loading posts...`}
              />
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let pathParams = ownProps.location.pathname.split('/').filter(function(el) {return el.length !== 0})
  let select = state.posts[pathParams[0]] ? state.posts[pathParams[0]] : []

  let navKeys = {}
  let posts = []
  for (var i in select) {
      if (!select.hasOwnProperty(i)) {
        continue
      }
      let keys = select[i].navKeys
      if ((keys[0] === ownProps.location.query.cat1 || !ownProps.location.query.cat1)
          && (keys[1] === ownProps.location.query.cat2 || !ownProps.location.query.cat2)) {
        posts.push(select[i])
      }
      
      if (!navKeys[keys[0]]) {
        navKeys[keys[0]] = []
      }
      navKeys[keys[0]].push(keys[1])
  }
  
  return {
    posts: posts,
    navKeys: navKeys
  }
} 

export default connect(mapStateToProps, {
  loadPosts
})(PostsPage)
