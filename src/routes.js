import React from 'react'
import { Route } from 'react-router'
import Blog from './containers/Blog'
import PostsPage from './containers/PostsPage'
import PostPage from './containers/PostPage'

export default <Route path="/blog" component={Blog}>
  <Route path="/"
         component={PostsPage} />
  <Route path="/posts/:post"
         component={PostPage} />
</Route>
