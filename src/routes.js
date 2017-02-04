import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Blog from './containers/Blog'
import AboutPage from './containers/AboutPage'
import PortfolioPage from './containers/PortfolioPage'
import PostsPage from './containers/PostsPage'
import PostPage from './containers/PostPage'

export default <Route path='/' component={Blog}>
  <IndexRoute component={AboutPage} />
  <Route path='/blog' component={PostsPage} />
  <Route path='/portfolio' component={PostsPage} />
  <Route path='/posts/:post' component={PostPage} />
</Route>
