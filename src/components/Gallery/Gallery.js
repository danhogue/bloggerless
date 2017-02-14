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
    const maxLength = 180
    let description = item.description
    if (description.length > maxLength) {
      description = description.slice(0,maxLength)
      for (var i=maxLength; i > 0; i--) {
        if (!/\s/.test(description[i])){
          description = description.slice(0, i)
        } else {
          break
        }
      }
      description += '....' 
    }
    return (
      <div key={item.path} className='gallery__item'>
        <a href={href}><img src={item.img} /></a>
        <h2><a href={href}>{item.title}</a></h2>
        <p>{description}</p>
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
        <section>
          <ul className="gallery">
            {posts.map(this.renderItem)}
          </ul>
        </section>
      </div>
    )
  }
}
