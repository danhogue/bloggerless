import React, { Component, PropTypes } from 'react'
import './BreadCrumbs.css'

export default class BreadCrumbs extends Component {
  static propTypes = {
      location: PropTypes.object
  }

  openMenue(e) {
    let sidebar = document.getElementById('sidebar')
    sidebar.classList.add("show-sidebar")
    return false;
  }

  render() {
    const { location } = this.props
    let path = location.pathname.replace('/','')
    let pathname = path.charAt(0).toUpperCase() + path.slice(1);
    let category1Link = ''
    let category2Link = ''
    if (location.query) {
      let cat1 = location.query['cat1']
      let cat2 = location.query['cat2']
      if (cat1){
        category1Link = (<li><span> > </span><a href={'#/'+path+'?cat1='+cat1}> {cat1}</a></li>)
      }
      if (cat2) {
        category2Link = (<li><span> > </span><a href={'#/'+path+'?cat1='+cat1+'&cat2='+cat2}> {cat2}</a></li>)
      }
    }

    return (
      <div className="bread-crumbs-wrapper">
        <header>
          <ul>
            <li><a href='#'><i className="fa fa-home" aria-hidden="true"></i></a></li>
            <li><a href={'#/'+path}>{pathname}</a></li>
            {category1Link}
            {category2Link}
            <li className='float-right'>
              <a onClick={this.openMenue}><i className="fa fa-bars" aria-hidden="true"></i></a>
            </li>
          </ul>
        </header>
      </div>
    )
  }
}
