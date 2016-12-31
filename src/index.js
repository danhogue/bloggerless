import React from 'react'
import { render } from 'react-dom'
import { hashHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()

//---------------------------------------------
// You can use either hashHistory or browserHistory here, but 
// hashHistory works better for s3 type deployments.
//---------------------------------------------
const history = syncHistoryWithStore(hashHistory, store)

render( < Root store = { store }
    history = { history }
    />,
    document.getElementById('root')
)