import React, { Component, PropTypes } from 'react'
import SocialLinks from '../../components/SocialLinks/SocialLinks'
import './SideNavBar.css'

export default class SideNavBar extends Component {
    static propTypes = {
        path: PropTypes.string,
        navKeys: PropTypes.object
    }

    renderChildKeys(base, child) {
        let keys = Object.keys(child)
        var items = keys.map(function(key) {
            let href = base + '&cat2=' + key
            return (
                <li key={key}><a href={href}>{key}</a></li>
            )
        });
        return (
            <ul>{items}</ul>
        )
    }

    closeMenue(e) {
        let sidebar = document.getElementById('sidebar')
        sidebar.classList.remove('show-sidebar')
        return false;
    }

    render() {
        let items = Object.keys(this.props.navKeys).reverse()
        items = items.map(function(key) {
            let href = '#'+this.props.path+'?cat1='+ key
            return (
                <li key={key}>
                    <a href={href}>{key}</a>
                    {this.renderChildKeys(href, this.props.navKeys[key])}
                </li>
            )
        }.bind(this));
        return (
            <div id='sidebar' className='sidebar'>
                <ul className="close-btn float-right">
                    <li>
                    <a onClick={this.closeMenue}><i className="fa fa-arrow-left" aria-hidden="true"></i></a>
                    </li>
                </ul>
                <div className='sidebar-image'>
                    <img src='./images/me.png' role="presentation" />
                </div>
                <div className='sidebar-blurb'>
                    <h5>Dan Hogue</h5>
                    <h6>Fullstack intelligence engineer</h6>
                    <SocialLinks></SocialLinks>
                    <hr />
                </div>
                <ul>{items}</ul>
            </div>
        )
    }
}
