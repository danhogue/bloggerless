import React from 'react'
import { render } from 'react-dom'
import { hashHistory, browserHistory, useRouterHistory } from 'react-router'
import { createHashHistory } from 'react-router/node_modules/history'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import './styles/core.css'

// This is hashHistory without the queryKey junk on the end of the url
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const store = configureStore()

// You can use hashHistory, appHistory or browserHistory here, but 
// hashHistory/appHistory works better for s3 type deployments since
// you don't have to hack a /* route.
const history = syncHistoryWithStore(appHistory, store)

render(<Root store = { store } history = { history } />,
    document.getElementById('root')
)