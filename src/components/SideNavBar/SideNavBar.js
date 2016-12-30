import React from 'react'
import './SideNavBar.scss'
import { rel } from '../../global'

export const SideNavBar = () => (
    rel('div', {id:'side-menu-wrapper', className:'navbar-default sidebar', role:'navigation'},
        rel('div', {className:'sidebar-nav navbar-collapse'},
            rel('ul', {id: 'side-menu', className: 'nav'}, [
                rel('li', {key:'1'}, rel('a', {href:'#/'}, [
                    rel('i', {key:'7', className:'fa fa-bold fa-fw'}),
                    rel('span', {key:'8', className:'header-link'}, 'Home')
                ])),
                rel('hr', {key:'2', className: 'sidebar-section-devider'}),
                rel('h4', {key:'3', className: 'sidebar-section-header'}, 'Social'),
                rel('li', {key:'4'}, rel('a', {href:'#/'}, [
                    rel('i', {key:'9', className:'fa fa-linkedin fa-fw'}),
                    rel('span', {key:'10', className:'header-link'}, '')
                ])),
                rel('li', {key:'5'}, rel('a', {href:'#/'}, [
                    rel('i', {key:'11', className:'fa fa-facebook fa-fw'}),
                    rel('span', {key:'12', className:'header-link'}, '')
                ])),
                rel('li', {key:'6'}, rel('a', {href:'#/'}, [
                    rel('i', {key:'13', className:'fa fa-twitter fa-fw'}),
                    rel('span', {key:'14', className:'header-link'}, '')
                ]))
            ])
        )
    )
);

export default SideNavBar
