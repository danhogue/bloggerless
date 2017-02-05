import React, { Component, PropTypes } from 'react'
import './SideNavBar.css'

export default class SideNavBar extends Component {
    static propTypes = {
        path: PropTypes.string,
        navKeys: PropTypes.object
    }
    render() {
        console.log(this.props.navKeys)
        return (
            <div className='sidebar'>
            </div>
        )
    }
}
