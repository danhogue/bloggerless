import React, { Component } from 'react'
import { connect } from 'react-redux'
import SocialLinks from '../components/SocialLinks/SocialLinks'
import '../styles/pages/AboutPage.css'

class AboutPage extends Component {
  render() {
    return (
      <div id='about-page' className='page-content'>
        <section id='home'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 cover-image'>
              <img src='./images/me.png' role="presentation" />
            </div>
            <div className='col-sm-12 col-md-6 cover-title-and-tagline'>
              <h1>Dan Hogue</h1>
              <h6>Entrepreneurially minded fullstack intelligence engineer</h6>
              <SocialLinks></SocialLinks>
              <a href='#/portfolio'>Portfolio </a>|
              <a href='#/blog'> Blog</a>
            </div>
          </div>
        </section>

        {/*<section id='about'>
          <div>
            <p>I am a Full Stack Engineer with broad experience designing and developing systems to enable organizational competitive advantage through advanced information handling and analytics. </p>
            <p>With a strong entrepreneurial and military heritage, I have a great appreciation for the critical role that accurate intel and rapid adaptability play in the success of almost any endeavor.</p>
            <p>I have a Bachelors degree in Computer Science with an emphasis in Machine Learning, a minor in business management, and three years on-the-job experience building intelligence products for engineering, sales, service and executive users.</p>
          </div>
        </section>

        <section id='contact'>

        </section>*/}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps, {})(AboutPage)
