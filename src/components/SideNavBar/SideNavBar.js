import React, { Component, PropTypes } from 'react'
import './SideNavBar.css'

export default class SideNavBar extends Component {
    static propTypes = {
        path: PropTypes.string,
        navKeys: PropTypes.object
    }

    renderChildKeys(keys) {
        var items = keys.map(function(key) {
            return (
                <li key={key}><a href="">{key}</a></li>
            )
        });
        return (
            <ul>{items}</ul>
        )
    }

    render() {
        let items = Object.keys(this.props.navKeys).reverse()
        items = items.map(function(key) {
            return (
                <li key={key}>
                    <a href="">{key}</a>
                    {this.renderChildKeys(this.props.navKeys[key])}
                </li>
            )
        }.bind(this));
        return (
            <div className='sidebar'>
                <ul>{items}</ul>
            </div>
        )
    }
}
