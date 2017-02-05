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
    let href = '/#/posts/' + item.id
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
  let pathParams = ownProps.route.path.split('/').filter(function(el) {return el.length !== 0})

  let select = state.posts
  for (var i in pathParams) {
    if(select[pathParams[i]]){
      select = select[pathParams[i]]
    }
  }
  let posts = gatherPosts(select, [])

  return {
    posts: posts
  }
} 

export default connect(mapStateToProps, {
  loadPosts
})(PostsPage)
