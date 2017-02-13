import React, { Component, PropTypes } from 'react'
import SocialLinks from '../../components/SocialLinks/SocialLinks'
import './SideNavBar.css'

export default class SideNavBar extends Component {
    static propTypes = {
        path: PropTypes.string,
        navKeys: PropTypes.object
    }

    renderChildKeys(base, keys) {
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
                <div className='sidebar-image'>
                    <img src='./images/me.png' />
                </div>
                <div className='sidebar-blurb'>
                    <h5>Dan Hogue</h5>
                    <h6>Fullstack intelligence engineer</h6>
                    <SocialLinks></SocialLinks>
                    <hr />
                </div>
                <ul>{items}</ul>
                {/*<footer className='sidebar-footer'>
                    <SocialLinks></SocialLinks>
                </footer>*/}
            </div>
        )
    }
}
