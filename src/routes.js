import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Blog from './containers/Blog'
import PostsPage from './containers/PostsPage'
import PostPage from './containers/PostPage'
import AboutPage from './containers/AboutPage'

export default <Route path="/" component={Blog}>
  <IndexRoute component={PostsPage} />
  <Route path="/posts/:post" component={PostPage} />
  <Route path='/about' component={AboutPage} />
</Route>
