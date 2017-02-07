import React, { Component, PropTypes } from 'react'
import './Gallery.css'

export default class Gallery extends Component {
  static propTypes = {
    loadingLabel: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired
  }

  static defaultProps = {
    loadingLabel: 'Loading...'
  }

  renderItem(item) {
    let href = '/#/posts/' + item.path
    return (
      <div key={item.path} className='gallery__item'>
        <a href={href}><img src={item.img} /></a>
        <h3><a href={href}>{item.title}</a></h3>
        <p>{item.description}</p>
        </div>
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
      <div className="gallery-wrapper">
        <header></header>
        <section>
          <ul className="gallery">
            {posts.map(this.renderItem)}
          </ul>
        </section>
      </div>
    )
  }
}
