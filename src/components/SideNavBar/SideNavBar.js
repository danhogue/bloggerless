import React, { Component, PropTypes } from 'react'
import './SideNavBar.css'

export default class SideNavBar extends Component {
    static propTypes = {
        pageTitle: PropTypes.string
    }
    render() {
        return (
            <div className='sidebar'>
            <h3>Sidebar</h3>
            <p>{this.props.pageTitle}</p>
            </div>
        )
    }
}
