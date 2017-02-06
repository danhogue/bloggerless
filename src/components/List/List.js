import React, { Component, PropTypes } from 'react'
import './List.css'

export default class List extends Component {
  static propTypes = {
    loadingLabel: PropTypes.string.isRequired,
    renderItem: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
  }

  static defaultProps = {
    loadingLabel: 'Loading...'
  }

  renderItem(item) {
    let href = '/#/posts/' + item.path
    return (
      <div key={item.path}><a href={href}>{item.title}</a></div>
    )
  }

  render() {
    const {
      posts, 
      loadingLabel
    } = this.props

    const isEmpty = posts.length === 0
    if (isEmpty) {
      return <h2><i>{loadingLabel}</i></h2>
    }

    if (isEmpty) {
      return <h1><i>Nothing here!</i></h1>
    }

    return (
      <div className='List'>
        {posts.map(this.renderItem)}
      </div>
    )
  }
}
